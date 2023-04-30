const database = require('../db/connect.js');
const { ObjectId } = require('mongodb'); // this helps with getting the id

const getAll = async (req, res) => {
  const db = await database.connectDatabase();
  const result = await db.collection('contacts').find().toArray();
  console.log(result);
  res.send(result);
};

const get = async (req, res) => {
  const db = await database.connectDatabase();
  // const id = req.params.id;
  // const query = { _id: id};
  const result = await db.collection('contacts').find({ _id: new ObjectId(req.params.id) });
  console.log(result);
  res.send(result);
};

module.exports = {
    get,
    getAll
};