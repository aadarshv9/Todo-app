const express = require("express");

const router = express.Router();

const addItemController = require("../controllers/addItem_controller");

router.post('/', addItemController.addItemToDB);

module.exports = router;