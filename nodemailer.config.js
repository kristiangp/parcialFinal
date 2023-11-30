const nodemailer = require('nodemailer');

// Configuración para Mailtrap (sustituye con tus credenciales)
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'eec151b0c9f92e',
        pass: '0d7e9ccc9723c2'
    }
});

module.exports = transporter;
