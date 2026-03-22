import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend is running!");
});

app.post("/contact", (req, res) => {
  const { fullName, company, email, phone, message } = req.body;

  if (!fullName || !email || !message) {
    res.status(400).json({ error: "fullName, email, and message are required." });
    return;
  }

  // Log to console (replace with email service like nodemailer/SendGrid as needed)
  console.log("New contact form submission:", {
    fullName,
    company,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  res.status(200).json({ success: true, message: "Message received!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
