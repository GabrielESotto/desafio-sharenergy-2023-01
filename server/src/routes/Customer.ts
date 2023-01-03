import express from 'express';
import controller from '../controllers/Costumer';

const router = express.Router();

router.post('/create', controller.createCustomer)
router.get('/get/:customerId', controller.readCustomer)
router.get('/get', controller.readAllCustomer)
router.patch('/update/:customerId', controller.updateCustomer)
router.delete('/delete/:customerId', controller.deleteCustomer)

export = router;
