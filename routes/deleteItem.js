const express = require("express");

const router = express.Router();

const deleteController = require("../controllers/delete_controller");

router.get('/', deleteController.deleteItemFromDB);

module.exports = router;