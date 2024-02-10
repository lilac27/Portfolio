const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.use(express.json());
app.use(cors());

async function sendMail(mailOptions) {
    try {
        const accessToken = await oauth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                accessToken: accessToken
            }
        });

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        throw error;
    }
}

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    try {
        const result = await sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', result });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ error: 'Failed to send email', details: error.message || error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
