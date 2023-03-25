//-----------IMPORT EXPRESS,CREATE SERVER,DATABASE----------------

let express = require('express');
const app = express();
const dbConnection=require('./dbConnection');
const bodyParser=require('body-parser')
const routes=require('./routes/r1')

//-------view engine------------------------

app.set('view engine','ejs');


//-------------START SERVER----------------------------------

app.listen('3000',()=>{
    console.log("server listening....");
});

//-----------user body parser to accept json--------

app.use(bodyParser.json({limit:"200mb"}))
app.use(bodyParser.urlencoded({extended: true,limit:'200mb'}))

//-------Page Navigation------------

app.use('',routes);

//-----------404-----------------------------------------


