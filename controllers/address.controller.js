const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Address = require('../models').address;
require('../config/config');  

const addAddress =async function(req,res){
    let [err,address] = await to(Address.bulkCreate([
        {studentId:req.body.studentId,address:req.body.address,countryId:req.body.countryId}    
    ]))
    console.log("Address data",address);
    if(err) return ReE(res,err,422);
    if(address) return ReS(res,address,200);

}

module.exports.addAddress = addAddress;