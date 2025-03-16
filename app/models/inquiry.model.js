import mongoose from 'mongoose'
const Schema = mongoose.Schema

const inquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})


export const inquiryModal = mongoose.model('inquiry', inquirySchema)