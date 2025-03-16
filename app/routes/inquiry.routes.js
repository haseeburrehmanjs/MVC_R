import express from 'express'
import { getInquiryList, inquiryDelete, inquiryInsert, updateInquiry } from '../controllers/web/inquiry.controller.js'
export const inquiryRoutes = express.Router()

inquiryRoutes.post('/inquiry-insert', inquiryInsert)
inquiryRoutes.get('/inquiry-list', getInquiryList)
inquiryRoutes.delete('/inquiry-delete/:id', inquiryDelete)
inquiryRoutes.put('/inquiry-update/:id', updateInquiry)