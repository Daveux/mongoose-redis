let mongoose = require('mongoose');

let stateSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  stateName: {
    type: String,
    required: true,
  },
  countryName: {

      type: String,
      required: true,
      trim: true,
      default: '',

  },
  countryRegion: {

      type: String,
      required: true,
      trim: true,
      default: '',

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },


});
module.exports = mongoose.model('State', userSchema);
