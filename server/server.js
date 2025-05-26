const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

const mongoURI =
  "mongodb+srv://thepenguinboss:iTG3xUbphtUagdmP@cluster1.n9bmd1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    customerPhone: String,
    customerAddress: String,
    orderDescription: String,
    orderType: String,
    deliveryTime: String,
    importantNotes: String,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    await newOrder.save();

    console.log("Received order:", orderData);

    res.json({
      message: "Order received and saved successfully!",
      receivedOrder: newOrder,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
