let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true,
      default: '',
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      default: '',
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    default: '',
  }

});
module.exports = mongoose.model('User', userSchema);


//let stateSchema = mongoose.Schema({
//
//});
