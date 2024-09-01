const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email,phone, message } = req.body;

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525, //487
    secure: false,
    auth: {
      user: "87b6cb15e96a6c",
      pass: "3219d944afbb2d"
    }
  });

  const mailOptions = {
    from: email,
    to: 'saira17_ali@hotmail.com',
    subject: `Contact form submission from ${name}`,
    text: `
    name: ${name}
    email: ${email}
    Phone: ${phone}
    Comment: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);

  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});