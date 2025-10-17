import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import { connectDB } from "./database/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// ✅ FIX: Use CORS globally, before routes
app.use(
  cors({
    origin: [
      "https://bizrolin1.netlify.app",
      "https://bizrolin.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Ensure preflight OPTIONS requests handled
app.options("*", cors());

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("✅ API is running fine...");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
});
