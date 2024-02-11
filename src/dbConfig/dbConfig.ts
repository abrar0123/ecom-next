import mongoose, { Mongoose } from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const Connection = mongoose.connection;
    Connection.on("connected", () =>
      console.log("MongoDB Connnection Successfully")
    );
    Connection.on("error", (err) => {
      console.log("MongoDB Connnection Error : ", err);
      process.exit();
    });
  } catch (error) {
    console.error("Connection Error", error);
  }
}
