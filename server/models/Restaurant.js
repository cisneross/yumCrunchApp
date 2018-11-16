var mongoose = require('mongoose');
var ReviewSchema = mongoose.model('Review').schema;
//Restaurant
var RestaurantSchema = new mongoose.Schema({
    //fields
    name:{type:String, required: [true, "Name Cant be empty"], minlength: [3, "Name needs at least 3 characters"]},
    cuisine: {type:String, required:[true, "Cuisine cant be empty"], minlength: [3, "Cuisine needs at least 3 characters"]},
    reviews: [ReviewSchema],
    }, {timestamps:true});
mongoose.model('Restaurant', RestaurantSchema);