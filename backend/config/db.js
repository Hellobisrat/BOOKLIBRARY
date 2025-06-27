import mongoose from "mongoose";

export async function connectToDB(){
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("mongoDB connected ",conn.connection.host)
  } catch (error) {
    console.log("Error connecting  to MomgoDB: ", error.message);
    process.exit(1);// exit the process ig the connection fails
  }
}