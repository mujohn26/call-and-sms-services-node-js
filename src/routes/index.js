import express from 'express';
import TwillioController from '../controllers/index';
const router = express.Router();


router.post('/sms', TwillioController.sendSms)

export default router;
