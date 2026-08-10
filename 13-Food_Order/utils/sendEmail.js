import transporter from "../config/email.js";

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Eat&Joy" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent successfully:", info.messageId);

    return info;
  } catch (error) {
    console.log("Email sending error:", error);
    throw error;
  }
};

export default sendEmail;