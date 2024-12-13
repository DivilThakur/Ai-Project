import express from 'express'
import { registerUser, loginUser, userCredits,  paymentRazorpay, verfiyPayment, verifyOtp } from "../controllers/userController.js"
import { userAuth } from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/verify-otp', verifyOtp);
userRouter.post('/login', loginUser);

userRouter.get('/credits', userAuth, userCredits);
userRouter.post('/razor-pay', userAuth, paymentRazorpay);
userRouter.post('/verify-pay', verfiyPayment);

export default userRouter;