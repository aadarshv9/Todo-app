const Item = require('../models/listItem');

module.exports.deleteItemFromDB = function(req, res){

    for(let id of req.query.deleteItem){
        // finding the entry by id and deleting the entry
        Item.findByIdAndDelete(id, function(err, item){
            if(err){
                console.log('error in deleting the object');
                return;
            }
            console.log("deleted successfully", item);
        });
    }
    return res.redirect('/');
    
}