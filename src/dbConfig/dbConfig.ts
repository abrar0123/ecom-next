import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      // "mongodb+srv://theibrar1000:tttt4444@cluster0.yfqxfis.mongodb.net/ecom?retryWrites=true&w=majority"
      "mongodb+srv://theibrar1000:dUPUjAtYwZFZQL4Z@vbtmernapp.yzmdrue.mongodb.net/vbt"
    );
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
