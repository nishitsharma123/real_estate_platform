// // routes/contact.js
// import dotenv from 'dotenv';
// dotenv.config();


// import { Router } from "express";
// import { createTransport } from "nodemailer";
// const router = Router();

// // POST request to handle contact form submission
// router.post("/contact", (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;

//   // Create the transporter for Nodemailer (you can use any email provider here)
//   const transporter = createTransport({
//     service: "gmail", // Example: using Gmail
//     auth: {
//       user: process.env.EMAIL_ID,
//       pass: process.env.PWD, // or use environment variables
//     },
//   });

//   // Set up email data
//   const mailOptions = {
//     from: email,
//     to: "nishitsharma128@gmail.com", // The email you want to send to
//     subject: `Contact from ${firstName} ${lastName}`,
//     text: `Message: ${message}\n\nPhone: ${phone}\n\nEmail: ${email}`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send("Error sending email: " + error.message);
//     }
//     res.status(200).send("Email sent successfully: " + info.response);
//   });
// });

// export default router;



// routes/contact.js

import dotenv from 'dotenv';
dotenv.config();

import { Router } from "express";
import sgMail from "@sendgrid/mail";

const router = Router();

// Set SendGrid API Key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// POST request to handle contact form submission
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    // Set up email data
    const msg = {
      to: "nishitsharma128@gmail.com", // Replace with your recipient email
      from: process.env.SENDGRID_VERIFIED_SENDER, // Must match the verified sender identity
      subject: `Contact from ${firstName} ${lastName}`,
      text: `Message: ${message}\n\nPhone: ${phone}\n\nEmail: ${email}`,
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email: " + error.message);
  }
});

export default router;
