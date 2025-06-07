import mongoose from "mongoose";

const Schema = mongoose.Schema

const contactUsSchema = new Schema({
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

export const contactUsModel = mongoose.model('porfolio', contactUsSchema)