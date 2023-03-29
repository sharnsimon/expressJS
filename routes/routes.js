var express = require('express');
var router = express.Router();

// Controllers
let customerController = require('../controllers/customerController');

router.get('/customer', customerController.getCustomers);
router.post('/customer', customerController.addCustomers);
router.get('/customer/:id', customerController.getCustomersID);
module.exports = router;