let mongoose = require('mongoose');
let mongooseRedisCache = require("mongoose-redis-cache");
let validator = require('validator');
let lgSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Can\'t be blank'] },
	town: String,
	ward: String,
	boroughs: String,
	counties: String,
});
lgSchema.set('redisCache', true);
lgSchema.set('Expires', 30);
module.exports = mongoose.model('LocalGovernment', lgSchema);
mongooseRedisCache(mongoose);