import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/mongo.js';
import userRouter from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import imageRouter from './routes/imageRoute.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(cors());
app.use(cookieParser());
await connectDb()

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.listen(PORT, () => console.log("server running on port " + PORT));