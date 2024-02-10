require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const session = require('express-session');
const cors = require('cors'); // Import CORS middleware

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL',
  'REFRESH_TOKEN'
);
oauth2Client.setCredentials({ refresh_token: 'REFRESH_TOKEN' })

// Configure Gmail API scopes
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

app.get('/auth/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Received tokens:', tokens); // Log the received tokens
    if (!tokens) {
      console.error('Tokens not received from Google.'); // Log an error if tokens are undefined
      res.status(500).send('Tokens not received from Google.');
      return;
    }
    req.session.tokens = tokens;
    console.log('Stored tokens in session:', req.session.tokens); // Log the stored tokens in session
    res.redirect('/send-email');
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).send('Failed to authenticate with Google.');
  }
});


app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received form data:', { name, email, message });

  try {
    // Set the credentials using the access token stored in the session
    oauth2Client.setCredentials(req.session.tokens);

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const emailContent = `
      From: "Your Name" <your-email@gmail.com>
      To: ${email}
      Subject: New Contact Form Submission
      Content-Type: text/html; charset=utf-8
      
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `;

    const encodedEmail = Buffer.from(emailContent).toString('base64');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message || error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
