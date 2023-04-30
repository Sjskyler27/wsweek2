const {MongoClient} = require('mongodb');


async function connectDatabase() {
    const uri = "mongodb+srv://sjskyler27:10013263@cluster0.d8sj7bp.mongodb.net/test";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      console.log('Connected to database');
      return client.db('web-service');
    } catch (error) {
      console.error('Error connecting to database', error);
    }
  }
  
  module.exports = {
    connectDatabase
  };