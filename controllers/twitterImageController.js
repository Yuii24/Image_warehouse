const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const db = require('../helpers/MongoConnecter')

const twitterImageController = {
  getAllImage: async (req, res, next) => {
    try {
      let twitter = await db.twitterUrl.find()

      if (twitter.length > 0) {
        res.send(twitter)
      } else {
        console.log("沒有資料!")
        // user = await User.create({ _id: 1, name: "Vic", age: 22, email: "Vic@example.com" });
      }

    } catch (err) {
      next('發生錯誤:', err);
    }
  }
}

module.exports = twitterImageController