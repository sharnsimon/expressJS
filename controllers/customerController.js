// require('../config/config');
const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Customer = require('../models').customer123;
require('../config/config');

const addCustomers = async function(req,res) {
    let[err,customers] = await to(Customer.create({
        name:'sharn',
        deptName:'CSE'
    }));
    console.log('customers data',customers);
    if(err) return ReE(res,err,422);
    if(customers) return ReS(res,customers,200);
}
module.exports.addCustomers = addCustomers;

const getCustomers = async function(req,res) {
    let[err,customers] = await to(Customer.findAll());
    console.log('customers data',customers);
    if(err) return ReE(res,err,422);
    if(customers) return ReS(res,customers,200);
}
module.exports.getCustomers = getCustomers;

const getCustomersID= async function(req,res) {
    let[err,customers] = await to(Customer.findAll({
        where:{
            id:req.params.id
        }
    }));
    console.log('customers data',customers);
    if(err) return ReE(res,err,422);
    if(customers) return ReS(res,customers,200);
}
module.exports.getCustomersID = getCustomersID;