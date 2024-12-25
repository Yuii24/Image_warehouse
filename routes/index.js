const express = require('express')
const router = express.Router()

const twitterImageController = require('../controllers/twitterImageController')

router.get('/', twitterImageController.getAllImage)


module.exports = router