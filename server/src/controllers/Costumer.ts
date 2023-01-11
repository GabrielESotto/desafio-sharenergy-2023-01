import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Customer from "../models/Customer";

type Customer = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  adress: string;
}

const createCustomer = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, phone, adress, cpf }: Customer = req.body;
  const emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if(!name || !email || !phone || !adress || !cpf) {
    res.status(400).send('Preencha todos os campos')
    return
  }

  if(name.length < 3 || name.length > 30) {
    res.status(400).send('Nome deve ter entre 3 e 30 caracteres')
    return
  }

  if(!emailTest.test(email)) {
    res.status(400).send('Insira um email valido')
    return
  }

  if(cpf.length !== 11) {
    res.status(400).send('CPF deve conter 11 digitos')
    return
  }

  if(adress.length <= 4) {
    res.status(400).send('Endereço deve ter pelo menos 5 caracteres')
    return
  }

  const customer = new Customer({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    phone,
    adress,
    cpf
  })

  return customer
    .save()
    .then((customer) => res.status(201).json({ customer }))
    .catch((error) => res.status(404).json({ error }))
}

const readCustomer = (req: Request, res: Response, next: NextFunction) => {
  const customerId: string = req.params.customerId;

  return Customer.findById(customerId)
    .then((customer) => (customer ?  
    res.status(200).json( [customer] ) : 
    res.status(404).json({ message: 'Customer not found'})))
    .catch((error) => res.status(500).json({ error }))
}

const readAllCustomer = (req: Request, res: Response, next: NextFunction) => {
  return Customer.find()
    .then((customers) => res.status(200).json( customers ))
    .catch((error) => res.status(500).json({ error }))
}

const updateCustomer = (req: Request, res: Response, next: NextFunction) => {
  const customerId = req.params.customerId;

  return Customer.findById(customerId)
    .then((customer) => {
      if (customer) {
        customer.set(req.body)

        return customer
          .save()
          .then((customer) => res.status(201).json({ customer }))
          .catch((error) => res.status(404).json({ error }))
      } else {
        res.status(404).json({ message: 'Not found'})
      }
    })
}

const deleteCustomer = (req: Request, res: Response, next: NextFunction) => {
  const customerId = req.params.customerId;

  return Customer.findByIdAndDelete(customerId)
    .then((customer) => (customer ? 
      res.status(201).json({ customer }) : 
      res.status(404).json({ message: 'Customer not found'})))
    .catch((error) => res.status(500).json({ error }))
}

export default {
  createCustomer,
  readCustomer,
  readAllCustomer,
  updateCustomer,
  deleteCustomer
};
