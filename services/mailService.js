const nodemailer = require('nodemailer');
// const env = require('dotenv');


async function sendMail({ from, to, subject, text, html }) {
    let transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let info = await transpoter.sendMail({
        from: `ShareDoc <${from}>`,
        to,
        subject,
        text,
        html
    });

    console.log(info)
}

module.exports = sendMail;