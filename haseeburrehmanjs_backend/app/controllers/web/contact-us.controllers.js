import { contactUsModel } from "../../models/contact-us.model"


export const contactUsData = (req, res) => {
  const { name, email, phone, message } = req.body;
  const contactUsDataSend = new contactUsModel({
    name,
    email,
    phone,
    message
  })

  contactUsDataSend.save().then(() => {
    res.status(200).json({
      message: 'data data save succesfully',
      bodyData: contactUsDataSend
    }).catch((error) => {
      res.status(404).json({
        message: error
      })
    })
  })
}