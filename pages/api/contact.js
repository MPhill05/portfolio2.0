export default function (req, res) {
  require('dotenv').config();


  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'portfolioacctemail@gmail.com',
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
      accessToken: process.env.ACCESSTOKEN,
      redirectUri: process.env.REDIRECTURI,
    }
  });

  const mailData = {
    from: 'portfolioacctemail@gmail.com',
    to: 'mphill05@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>Sent from: ${req.body.email}</div><p>${req.body.message}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (info)
      console.log(info)
    else (err)
    console.log(err)
  })

  console.log(req.body)
  res.send('success')
  res.status(200)
}