const express = require("express");
const port = 8000;

const db = require('./config/mongoose');
const Item = require('./models/listItem');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server at ${port}`);
        return;
    }
    console.log(`Server is running on ${port}`);
});