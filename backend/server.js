const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/send-email', async (req, res) => {
 const { email, subject, text } = req.body;

 // Konfigurasi Nodemailer
 let transporter = nodemailer.createTransport({
    service: 'gmail', // Gunakan layanan email yang sesuai
    auth: {
      user: 'your-email@gmail.com', // Ganti dengan email Anda
      pass: 'your-password', // Ganti dengan password email Anda
    },
 });

 // Opsi email
 let mailOptions = {
    from: 'your-email@gmail.com', // Ganti dengan email Anda
    to: email,
    subject: subject,
    text: text,
    // Untuk mengirim file, tambahkan opsi 'attachments'
    // attachments: [
    //   {
    //     filename: 'file.pdf',
    //     path: '/path/to/file.pdf', // Ganti dengan path file yang ingin dikirim
    //   },
    // ],
 };

 // Kirim email
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
 });
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
