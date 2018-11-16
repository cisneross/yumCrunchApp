var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Rest = mongoose.model('Restaurant');

module.exports = {
    //methods
    create: (req, res) => {
        console.log('madde it to the server', req.body.name);
        Rest.create({
            name: req.body.name,
            cuisine: req.body.cuisine,
        }, function (err, rest) {
            if (err) {
                res.json(err);
            } else {
                console.log('succesfully created a product', rest);
                res.json(rest);
            }
        })
    },
    findAllRests: (req, res) => {
        console.log('made it to find all rests')
        Rest.find({}, function (err, rests) {
            if (err) {
                console.log('errors');
                res.json(err);
            }
            else {
                console.log('found all the restaruants', rests);
                res.json(rests);
            }
        })
    },
    findOneRest: (req, res) => {
        console.log('got the id ', req.params.id);
        Rest.findOne({ _id: req.params.id }, function (err, rest) {
            console.log('made it contorller', rest)
            console.log('got an erro', err);
            if (err) {
                res.json(err);
            } else {
                res.json(rest);
            }
        })
    },
    createreview: (req, res) => {
        console.log('madde it to the serverdfbdfbvjdfbjklvbdf', req.body.name);
        console.log('from server this is the rest ID kfb',req.params.id);
        var restId = req.params.id;
        Review.create({
            name: req.body.name,
            stars: req.body.stars,
            review: req.body.review,
        }, function (err, rev) {
            console.log(rev);
            if (err) {
                res.json(err);
            } else {
                console.log('succesfully created a review', rev);
                Rest.findOneAndUpdate({_id: restId}, {$push: {reviews:rev}},function(err){
                    if (err){
                        console.log("couldn't add review");
                    }
                    else{
                        console.log("added review!");
                        res.json(rev);
                    }
                });
                
            }
        })
    },
    update:(req,res)=>{
        console.log(req.params.id);
        Rest.findOne({_id: req.params.id}, function(err, rest){
            rest.name = req.body.name;
            rest.cuisine = req.body.cuisine;
            rest.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    res.json(rest);
                }
            })
        })
    },
    remove:(req,res)=>{
        Rest.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Product deleted Deleted"});
            }
        })
    }
      

}