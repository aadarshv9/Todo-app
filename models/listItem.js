const mongoose = require('mongoose');
// creating schema for tasks item
const itemSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

});

// creating collection in database with name 'Item' using schema 'itemSchema'
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;