import mongoose from "mongoose";

export async function connectDB() {
  const { DB_USERNAME, DB_PASSWORD } = process.env;
  const connectionStr = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.tz45ju0.mongodb.net/next-ecom`;
  try {
    console.log("first", DB_USERNAME);
    await mongoose.connect(connectionStr);
    const Connection = mongoose.connection;

    Connection.on("connected", () =>
      console.log("code107 :MongoDB Connnection Successfully")
    );
    Connection.on("error", (err) => {
      console.log("code107 : MongoDB Connnection Error : " + err);
      // process.exit();
    });
  } catch (error) {
    console.error("code107 : Connection Error", error);
  }
}
