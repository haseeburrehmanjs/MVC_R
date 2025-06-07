import expres from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { contactUsRoutes } from './app/routes/contact.routes.js';

dotenv.config()
const app = expres();
app.use(expres.json())
app.use(cors())

app.get('/contact-us', (req, res) => (
    res.send('hello world broo how are you!')
))

app.use('/website/api', contactUsRoutes)

mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(process.env.PORT, () => (
        console.log(`express app run on port ${process.env.PORT}`)
    ))
})
