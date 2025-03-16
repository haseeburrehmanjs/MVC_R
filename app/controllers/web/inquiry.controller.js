import { inquiryModal } from "../../models/inquiry.model.js"

// inquiry insert controller
export const inquiryInsert = (req, res) => {
    const { name, email, phone, message } = req.body
    const inquiryDataSend = new inquiryModal({
        name,
        email,
        phone,
        message
    })

    inquiryDataSend.save().then(() => {
        res.status(200).json({
            message: 'data send succesfully',
            bodyData: inquiryDataSend
        })
    }).catch((error) => {
        res.status(404).json({
            message: 'data send succesfully',
            message: error
        })
    })
}

// inquiry list controller
export const getInquiryList = async (req, res) => {
    const inquiryList = await inquiryModal.find()
    res.status(200).json({
        message: 'all inquiry data',
        inquiryData: inquiryList
    })
}

// inquiry delete controller
export const inquiryDelete = async (req, res) => {
    const inquiryId = req.params.id
    const deleteInquiry = await inquiryModal.deleteOne({ _id: inquiryId })
    res.send({
        status: 200,
        message: deleteInquiry,
    })
}