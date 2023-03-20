const mongoose = require('mongoose');
// const config = require('config');
// const db = process.env.mongoURI;
const db = process.env['mongoURI']

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// const { Db } = require("mongoDB");
// const mongoose = require("mongoose");

// module.exports = () => {
//   try {
//     const uri = process.env.ATLAS_URI;
//     mongoose.connect(uri, {});
//     console.log("Connected to Database Successfully");
//   } catch (error) {
//     console.log(error);
//     console.log("Connection Failed");
//   }
// };
