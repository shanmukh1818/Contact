const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( "mongodb+srv://236m1a0520_db_user:iqfBS1tIej5mI4nE@shannu.1dndsqj.mongodb.net/?appName=Shannu" || process.env.MONGODB_URI );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
