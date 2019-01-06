let mongoose = require('mongoose');
let mongooseRedisCache = require('mongoose-redis-cache');
let validator = require('validator');
let occupationSchema = new mongoose.Schema({
	name: String,
	location: String,
	type: String,
	position: String,
	yoe: Number;
	
});
occupationSchema.set('redisCache', true);
occupationSchema.set('Expires', 30);
module.exports = mongoose.model('Ocupation', occupationSchema);
mongooseRedisCache(mongoose);