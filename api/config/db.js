import mongoose from "mongoose";

const conn = async () => {
  try {
    let connected = await mongoose.connect(process.env.DB_URL);
    console.log(`sever connected on ${connected.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default conn;
