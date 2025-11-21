import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    mongoose.connection.on("error", (err) => console.log("Database Error:", err));
    
    await mongoose.connect(`${process.env.MONGODB_URI}health-center`, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
    });
  } catch (error) {
    console.log("Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
