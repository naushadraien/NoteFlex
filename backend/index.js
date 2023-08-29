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

app.use(express.json());

// Available Routes
app.use("/api/auth", routerAuth);
app.use("/api/notes", routerNotes);

app.listen(process.env.PORT, () => {
  console.log(
    `iNotebook backend listening at http://localhost:${process.env.PORT}`
  );
});
