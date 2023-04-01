const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Country = require('../models').country;
require('../config/config');    

const addCountry = async function(req,res) {
    let[err,country] = await to(Country.create([
        {name:req.body.name}
    ]));
    console.log('Country Details',country);
    if(err) return ReE(res,err,422);
    if(country) return ReS(res,country,200);
}
module.exports.addCountry = addCountry;