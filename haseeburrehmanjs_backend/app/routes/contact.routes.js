import express from 'express'
import { contactUsData } from '../controllers/web/contact-us.controllers.js'

export const contactUsRoutes = express.Router()

contactUsRoutes.post('/contact-us-insert', contactUsData)