const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    // Use an in-memory database temporarily if the URI is old or missing
    if (!uri || uri.includes('cluster0.f4djjzr.mongodb.net') || process.env.USE_MEMORY_DB === 'true') {
      console.log('Using in-memory MongoDB temporary database for development...');
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
