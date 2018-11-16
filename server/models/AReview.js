var mongoose = require('mongoose');

//review
var ReviewSchema = new mongoose.Schema({
    //fields
    name:{type:String, required: [true, "Can't be empty"], minlength: [3, "Name must be at least 3 characters"]},
    stars: {type:Number, required:[true, "Must select one"]},
    review: {type:String, required:[true, "Can't be empty"], minlength: [3, "Name must be at least 3 characters"]},
    }, {timestamps:true});
    
    mongoose.model('Review', ReviewSchema);

