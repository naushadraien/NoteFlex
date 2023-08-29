import cors from "cors";
import { config } from "dotenv";
import connectToMongo from "./db.js";
import express from "express";
import routerAuth from "./routes/auth.js";
import routerNotes from "./routes/notes.js";

connectToMongo();
const app = express();
config({
  path: "./config.env",
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Available Routes
app.use("/api/auth", routerAuth);
app.use("/api/notes", routerNotes);

app.listen(process.env.PORT, () => {
  console.log(
    `iNotebook backend listening at http://localhost:${process.env.PORT}`
  );
});
