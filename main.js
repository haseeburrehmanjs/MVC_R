import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { inquiryRoutes } from './app/routes/inquiry.routes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/website/api', inquiryRoutes)

mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`express app run on port ${process.env.PORT}`);
    })
})