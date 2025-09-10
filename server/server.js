import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import creditRouter from "./routes/creditRoutes.js";
import { stripeWebooks } from "./controllers/webhook.js";

const app = express();

await connectDb();

// stripe webhook

app.post("/api/stripe",express.raw({type:"application/json"}),stripeWebooks);

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message",messageRouter);
app.use("/api/credit",creditRouter);


app.get("/", (req, res) => {
    res.send("Server is Live!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

