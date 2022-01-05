require('dotenv').config();
const nodemailer = require('nodemailer')

export default (req, res) => {

  const { name, email, message } = req.body;

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
    subject: `New mail from ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>Sent from: ${email}</div><p>${message}</p>`
  }

  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      res.send('error ' + JSON.stringify(err));
    } else {
      res.send('success');
    }
  })
}