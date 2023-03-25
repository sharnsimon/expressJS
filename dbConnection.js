// var mysql=require('mysql2')

// //------CREATE CONNECTION------------------
let mysql=require('mysql2')
let bodyParser=require('body-parser')
 
const connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Sharnsimon2002!',
        database:'customer'
});

connection.connect((err,data)=>{
    console.log("Connected to the databse");
    if(err){
        console.log(err)
    }
});


function displayTable(){
    return new Promise((resolve, reject) => {
        connection.query('select * from customer',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
module.exports.displayTable=displayTable
function displayRow(id){
    return new Promise((resolve, reject) => {
        connection.query(`select fname,lname from customer where id=${id}`,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
                resolve(data)
            }
        })
    })
}
 
module.exports.displayRow=displayRow;
module.exports.connection=connection
function insertTable(fname,lname){
    console.log(fname,lname);
    return new Promise((resolve, reject) => {
        connection.query('insert into customer(fname,lname) values(?,?)',[fname,lname],(err,data)=>{
            if(err){console.log(err)}
            resolve(data);
        })
    })
}
module.exports.insertTable=insertTable;

function updateTable(fname,lname,id){
    console.log(fname,lname,id);
    return new Promise((resolve, reject) => {
        connection.query('update customer set fname=?,lname=? where id=?',[fname,lname,id],(err,data)=>{
            if(err){
                console.log(err)
            }
            resolve(data);
        })
    })
}
module.exports.updateTable=updateTable
















