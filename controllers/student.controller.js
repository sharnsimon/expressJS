const { fn } = require('sequelize');
const {to,ReS,ReE} = require('../global_functions');
const Student = require('../models').student;
const Department = require('../models').department;
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

const newStudentReq = async function(req,res){
    let dept_name= req.body.name;
    let[err,deptId] = await to(Department.findOne({
        attributes:['id'],
        where:{name:dept_name}
    }));if(err) return ReE(res,err,422);

    let departmentID=deptId.id;
    console.log(departmentID)
    let[error,student] = await to(Student.create(
        {firstName:req.body.firstName,
        lastName:req.body.lastName,
        gender:req.body.gender,
        departmentId:departmentID}
        
    ))
    // console.log('Student Details',student);
    if(error) return ReE(res,err,422);
    if(student) return ReS(res,student,200);

}
module.exports.newStudentReq = newStudentReq;