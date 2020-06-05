const Item = require('../models/listItem');

module.exports.home = function(req, res){
    Item.find({}, function(err, items){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }

        // rendering home page and sending all list of tasks from database
        res.render('home', {
            itemList: items,
        });
    
    });
}