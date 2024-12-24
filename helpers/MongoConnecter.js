const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Image_collection')

const db = mongoose.connection;
const Schema = mongoose.Schema;


db.on('error', console.error.bind(console, 'MongoDB 連接錯誤:'));
db.once('open', function () {
  console.log('成功連接到 MongoDB!');
});

const twitterUrlSchema = new Schema({
  category: String,
  character_name: String,
  artist: String,
  description: String,
  url: String,
  tag: String,
  image_url: String,
});

const twitterUrl = mongoose.model('twitterUrl', twitterUrlSchema, 'twitter_url');

module.exports = {
  db,
  twitterUrl
}