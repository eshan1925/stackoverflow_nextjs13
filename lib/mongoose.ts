import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  console.log("I was here MDB");
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("Missing Mongodb URL");

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevOverflow",
    });
    isConnected = true;
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
