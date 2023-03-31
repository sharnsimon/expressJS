const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Student = require('../models').student;
require('../config/config');    

const addStudent = async function(req,res) {
    let[err,student] = await to(Student.bulkCreate([
        {firstName:'Sharn',lastName:'Simon',gender:'Male',departmentId:1},
        {firstName:'Selva',lastName:'Raj',gender:'Male',departmentId:2},
        {firstName:'Sharvesh',lastName:'Ram',gender:'Male',departmentId:3}
    ]));
    console.log('Student Details',student);
    if(err) return ReE(res,err,422);
    if(student) return ReS(res,student,200);
}
module.exports.addStudent = addStudent;