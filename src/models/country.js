let mongoose = require('mongoose');
let mongooseRedisCache = require("mongoose-redis-cache");
let countrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  countryName: {
    type: String,
    trim: true,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  }
  latitude: {
    type: Number,
    required: true,
  }
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },


});
module.exports = mongoose.model('Country', countrySchema);
