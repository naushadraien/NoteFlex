import { config } from "dotenv";
import mongoose from "mongoose";
//instead of using localhost in the mongoURI, use 127.0.0.1 for avoiding the 1000ms inserting error()
//const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"  , here inotebook in this url inserted for creating the inotebook database

config({
  path: "./config.env",
});
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.set("strictQuery", false); // Set strictQuery to false
  mongoose.connect(
    mongoURI,
    {
      dbName: "NoteFlex",
    },
    () => {
      console.log("Connected to Mongo Successfully");
    }
  );
};


export default connectToMongo;
