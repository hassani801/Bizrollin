import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import {connectDB} from "./database/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `);
  });
});
