const axios = require("axios");

async function sendMail(email, sub, message) {
  try {
    await axios.post("https://api.brevo.com/v3/smtp/email", {
      sender: { email: "aman010kr@gmail.com" }, // verified sender
      to: [{ email }],
      subject: sub,
      htmlContent: message
    }, {
      headers: {
        "api-key": process.env.SMTP_PASS,
        "Content-Type": "application/json"
      }
    });

    console.log("Verification email sent!");
  } catch (err) {
    console.error("Error sending email:", err.response?.data || err.message);
  }
}

export default sendMail; 
