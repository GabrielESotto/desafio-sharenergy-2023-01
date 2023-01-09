import express from 'express'
import axios from 'axios'
import http from 'http'
import mongoose from 'mongoose'
import { config } from './config/config'
import Logging from './library/Logging';
import customerRoutes from './routes/Customer'
import userRoutes from './routes/User'

const router = express();
const cors = require('cors')

// Connect to MongoDB
mongoose.set("strictQuery", false)

mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
.then(() => {
  Logging.info('Connected to MongoDB.')
  StartServer()
})
.catch(error => {
  Logging.error('Unable to connect: ')
  Logging.error(error)
})

// Only start the server if Mongo Connects
const StartServer = () => {
  router.use((req, res, next) => {
      Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

      res.on('finish', () => {
          Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
      });

      next();
  });

  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  // Rules API
  router.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

      if (req.method == 'OPTIONS') {
          res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
          return res.status(200).json({});
      }

      next();
  });

  // Proxy
  router.use(cors())

  router.get('/cattp/:code', async (req, res) => {

    let data: string | undefined = ''

    const numberCode = req.params.code

    await axios.get(`https://http.cat/${numberCode}`)
    .then(resp => {
      data = resp.config.url
    })
    .catch(error => console.log(error))

    return res.json(data)
  })

  // Routes
  router.use('/customers', customerRoutes);
  router.use('/users', userRoutes);

  // Healthcheck
  router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

  // Error handling
  router.use((req, res, next) => {
      const error = new Error('Not found');

      Logging.error(error);

      res.status(404).json({
          message: error.message
      });
  });

  http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};
