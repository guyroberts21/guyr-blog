const { MongoClient } = require('mongodb');
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db('posts');
        console.log('Successfully connected to MongoDB.');
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};