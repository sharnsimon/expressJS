const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Address = require('../models').address;
const Student = require('../models').student;
const Department = require('../models').department;
const Country = require('../models').country;
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

const newAddressReq = async function(req,res){
    let dept_name= req.body.dept_name
    let [err,departmentID] = await to(Department.findOne({
        attribute:['id'],
        where:{
            name:dept_name
        }
    }));if(err) return ReE(res,err,422);

    let dept_id=departmentID.id;
    let[error,student]=await to(Student.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        departmentId:dept_id}));
    if(error) return ReE(res,err,422);

    let[errr,countryID]= await to(Country.findOne({
        attribute:['id'],
        where:{name:req.body.name}
    }));
    if(errr) return ReE(res,err,422);
    let country_id=countryID.id
    let[errrr,address]=await to(Address.findOne({
        studentId:student.id,
        address:req.body.address,
        countryId:country_id
    }))
    if(errrr) return ReE(res,err,422);
    if(address) return ReS(res,address,200);
}

module.exports.newAddressReq = newAddressReq;