const jwt = require('jsonwebtoken')

const config = process.env

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || '';

  if (!token) {
    return res.status(403).send('Um token é necessário para autenticação.')
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send('Token invalido')
  }
  return next()
}

module.exports = verifyToken;
