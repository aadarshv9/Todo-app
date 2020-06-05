const Item = require('../models/listItem');

module.exports.addItemToDB = function(req, res){
    // adding data to the database collection
    Item.create({
        text: req.body.taskDescription,
        category: req.body.category,
        date: req.body.dueDate
    }, function(err, newItem){
        if(err){console.log('Error in creating a Item!')
            return;}
            console.log(newItem);
            return res.redirect('back');
    });
}
