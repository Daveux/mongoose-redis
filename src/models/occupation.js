let mongoose = require('mongoose');
let mongooseRedisCache = require('mongoose-redis-cache');
let validator = require('validator');
let occupationSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Can\'t be blank'] },
	location: String,
	type: String,
	position: String,
	yearsOfExperience: {type: Number, required: [true, 'Can\'t be blank'] },
	educationalQualification: String,
	professionalQualification: String,
	skills: []
	
});
occupationSchema.set('redisCache', true);
occupationSchema.set('Expires', 30);
module.exports = mongoose.model('Ocupation', occupationSchema);
mongooseRedisCache(mongoose);