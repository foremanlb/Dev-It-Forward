const mongoose = require('mongoose')

let MONGODB_URI =
  process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/devitforwardDatabase'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch((error) => console.log(error))

mongoose.set('debug', true)
let db = mongoose.connection

module.exports = db