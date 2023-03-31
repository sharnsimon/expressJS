var express = require('express');
var router = express.Router();

// Controllers
let customerController = require('../controllers/customerController');
let addressController = require('../controllers/address.controller')
let countryController = require('../controllers/country.controller')
let departmentController = require('../controllers/department.controller')
let studentController = require('../controllers/student.controller')


router.get('/customer', customerController.getCustomers);
router.post('/customer', customerController.addCustomers);
router.get('/customer/:id', customerController.getCustomersID);
router.get('/getCustomer/:name', customerController.getCustomersName);
router.put('/updateCustomers', customerController.updateCustomers);

router.post('/address',addressController.addAddress);
router.post('/country',countryController.addCountry);
router.post('/department',departmentController.addDepartment)
router.post('/student',studentController.addStudent);

module.exports = router;