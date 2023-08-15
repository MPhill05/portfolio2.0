const sendgridMail = require('@sendgrid/mail');

export default async (req, res) => {
  const { name, email, message } = req.body;

  sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'mphill05@gmail.com',
    from: 'portfolioacctemail@gmail.com',
    subject: `New mail from portfolio site from ${name}`,
    text: `Message from ${email}: ${message}`,
  };

  try {
    await sendgridMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email')
  }
};