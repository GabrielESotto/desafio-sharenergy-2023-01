import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const jwt = require('jsonwebtoken')
const auth = require('../middleware/Auth')
const bcrypt = require('bcrypt')

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10)
  
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username,
      password: encryptedPassword
    })
  
    const token = jwt.sign(
      { user_id: user._id },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h"
      }
    )
  
    user.token = token
  
    return user
      .save()
      .then((user) => res.status(201).json({ user }))
      .catch((error) => res.status(500).json({ error }))
  } catch (error) {
    return res.status(401).json({ error })
  }
  
}

const readUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) => (user ? res.status(200).json({ user }) : 
    res.status(404).json({ message: 'Not found'})))
    .catch((error) => res.status(500).json({ error }))
}

const readAllUsers = (req: Request, res: Response, next: NextFunction) => {
  return User.find()
    .then((users) => res.status(200).json({ users }))
    .catch((error) => res.status(500).json({ error }))
}

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    if(!(username && password)) {
      res.status(400).send('Todos os campos devem ser preenchidos.')
    }

    const user = await User.findOne({ username: username })

    if (!user || user === null) {
      return res.status(500).send('Usuario não encontrado')
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "30min",
        }
      )

      user.token = token

      return res.status(200).json({ user })
    }
    return res.status(401).send('Dados inválidos.')
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(404).send('Usuario a ser deletado deve ser informado')
  }

  if(!(await User.findOne({ username: username}))) {
    return res.status(404).send('Usuario não existe')
  } else {
    await User.findOneAndDelete({ username: username })
    return res.status(200).send('Usuario deletado com sucesso.')
  }
}

export default {
  createUser,
  readUser,
  readAllUsers,
  loginUser,
  deleteUser
}
