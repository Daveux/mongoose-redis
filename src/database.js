let mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'daveux';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true})
    //mongoose.connect('mongodb://127.0.0.1:27017/daveux')
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
       //mongoose.Promise = global.Promise;
  }
}
module.exports = new Database()
