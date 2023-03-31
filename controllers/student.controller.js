const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Student = require('../models').student;
require('../config/config');    

const addStudent = async function(req,res) {
    let[err,student] = await to(Student.bulkCreate([
        {firstName:req.body.firstName,lastName:req.body.lastName,gender:req.body.gender,departmentId:req.body.departmentId}
    ]));
    console.log('Student Details',student);
    if(err) return ReE(res,err,422);
    if(student) return ReS(res,student,200);
}
module.exports.addStudent = addStudent;