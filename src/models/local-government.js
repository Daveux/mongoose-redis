let mongoose = require('mongoose');
let mongooseRedisCache = require("mongoose-redis-cache");
let validator = require('validator');
let lgSchema = new mongoose.Schema({
	area: String;
	district: String
});
lgSchema.set('redisCache', true);
lgSchema.set('Expires', 30);
module.exports = mongoose.model('LocalGovernment', lgSchema);
mongooseRedisCache(mongoose);