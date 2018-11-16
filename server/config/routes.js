var revrests = require('./../controllers/revrests.js');
var path = require('path');

module.exports = function(app){
    //routes
    app.post('/create', revrests.create);
    app.post('/createrev/:id', revrests.createreview);
    app.put('/edit/:id', revrests.update);
    app.get('/allrests', revrests.findAllRests);
    app.get('/findRest/:id', revrests.findOneRest);
    app.delete('/delete/:id', revrests.remove);


    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}