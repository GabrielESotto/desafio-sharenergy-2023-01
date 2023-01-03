import express from 'express';
import controller from '../controllers/User';

const router = express.Router();

router.post('/create', controller.createUser)
router.get('/get', controller.readAllUsers)
router.post('/login', controller.loginUser)
router.delete('/delete/', controller.deleteUser)

export = router;
