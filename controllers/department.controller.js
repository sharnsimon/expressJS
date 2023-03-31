const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Department = require('../models').department;
require('../config/config');    

const addDepartment = async function(req,res) {
    let[err,department] = await to(Department.bulkCreate([
        {name:'CSE'},
        {name:'EEE'},
        {name:'ECE'}
    ]));
    console.log('Department Details',department);
    if(err) return ReE(res,err,422);
    if(department) return ReS(res,department,200);
}

module.exports.addDepartment = addDepartment;