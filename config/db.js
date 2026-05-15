const mongoose = require('mongoose');

const connectDB = async () => {
  const maxRetries = 5;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const uri = process.env.MONGO_URI;

      if (!uri) {
        console.error('ERROR: MONGO_URI environment variable is not set!');
        console.error('Please set MONGO_URI in your .env file or hosting environment variables.');
        process.exit(1);
      }

      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
      });

      console.log(`MongoDB Connected: ${conn.connection.host}`);

      // Handle connection errors after initial connect
      mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err.message);
      });

      mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected. Attempting to reconnect...');
      });

      return; // Success — exit the retry loop
    } catch (err) {
      retries++;
      console.error(`MongoDB connection attempt ${retries}/${maxRetries} failed: ${err.message}`);

      if (retries >= maxRetries) {
        console.error('All MongoDB connection attempts failed. Exiting...');
        process.exit(1);
      }

      // Wait before retrying (exponential backoff: 2s, 4s, 8s, 16s, 32s)
      const waitTime = Math.pow(2, retries) * 1000;
      console.log(`Retrying in ${waitTime / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
};

module.exports = connectDB;

