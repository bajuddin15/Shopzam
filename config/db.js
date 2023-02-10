const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => {
        console.log(`MongoDB connected successfully with server...`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
