import mongoose from "mongoose";

let connected = false;
export async function connectToDB() {
  mongoose.set("strictQuery", true);
  try {
    if (connected) {
      console.log("Database already connected");
      return;
    }
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error", error);
      process.exit();
    });
    connected = true;
    return;
  } catch (error) {
    console.log(error);
  }
}
