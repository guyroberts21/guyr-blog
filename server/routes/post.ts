import * as express from 'express';

// create instance of express router
// router added as middleware
const postRoutes = express.Router();

// allow connection to the database
const dbo = require('../db/conn');

postRoutes.route('/post').get((rqe, res) => {
  let db_connect = dbo.getDb();
  db_connect
    .collection('posts')
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

module.exports = postRoutes;
