import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://ipnia.com', 'https://www.ipnia.com'],
  credentials: true
}));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post("/api/create-razorpay-order", async (req, res) => {
  console.log("✅ Received request on /api/create-razorpay-order");

  const { amount } = req.body;
  console.log("🧾 Amount received from frontend:", amount);

  try {
    const order = await razorpay.orders.create({
      amount, // amount in paise
      currency: "INR",
      payment_capture: 1
    });

    console.log("✅ Razorpay order created successfully:", order);

    res.json(order);
  } catch (err) {
    console.error("❌ Error creating Razorpay order:", err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Razorpay backend running on port ${PORT}`)); 