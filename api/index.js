import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Transaction from "./models/transaction.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("It's Working..");
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, dateTime, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    dateTime,
    price,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.listen(4000, () => {
  console.log(`Port is running at https://localhost:${4000}`);
});
