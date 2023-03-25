var express=require('express')
var router = express.Router();
var dbConnection=require('../dbConnection')

router.get('/',(req,res)=>{
    res.render('index',{name:'sharn'})
})

router.get('/addCustomer',(req,res)=>{
    res.render('addCustomer',{firstName:"",lastName:""})    
})

router.get('/updateCustomer',(req,res)=>{
    res.render('updateCustomer')    
})


router.get('/customer',(req,res)=>{
        dbConnection.displayTable().then((data)=>{
        res.render('customer',{data})})
    })
router.get('/addCustomer/:id',(req,res)=>{
        console.log(req.params)
        dbConnection.displayRow(req.params.id).then((data)=>{
        res.render('addCustomer',{firstName:data[0].fname,lastName:data[0].lname})})
    })
router.get('/about',(req,res) => {
    res.render('about',{name:'express about'});
});

router.post('/createCustomer',(req,res)=>{
        console.log('return',req.body);
        dbConnection.insertTable(req.body.firstName,req.body.lastName).then((data)=>{
        console.log(data);
        res.write('Success');
        // res.status(200).json({'infor':'success'})
        res.end();
    })
    // dbConnection.query(`insert into customer values(${req.body.firstname},${req.body.lastname})`)
    
    
})

router.put('/updateTable',(req,res)=>{
        console.log('return',req.body);
        dbConnection.updateTable(req.body.firstName,req.body.lastName,req.body.id).then((data)=>{
        console.log(data);
        res.status(200).json({'infor':'success'})
    })
    })


router.use((req,res)=>{
    res.render('404')
});

router.get('/')

module.exports=router;