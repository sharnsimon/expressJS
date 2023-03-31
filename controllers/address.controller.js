const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Address = require('../models').address;
require('../config/config');  

const addAddress =async function(req,res){
    let [err,address] = await to(Address.bulkCreate([
        {studentId:4,address:'Tamilnadu',countryId:1},
        {studentId:5,address:'Oregon',countryId:2},
        {studentId:6,address:'Toronto',countryId:3}    
    ]))
    console.log("Address data",address);
    if(err) return ReE(res,err,422);
    if(address) return ReS(res,address,200);

}

module.exports.addAddress = addAddress;