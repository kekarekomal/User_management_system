const express=require('express'),
      path=require('path'),
      morgan=require('morgan'),
      mysql=require('mysql'),
      myConnection=require('express-myconnection');
      
      

const app=express();
const {check,validationResult}=require('express-validator');
//importing routes
const userRoutes=require('./src/routes/users');


//settings

app.set('views',path.join(__dirname,'src/views'));
app.set('view engine','ejs');
//middleware
//morgan for http requestlogger
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database:'users_info'
},'single'));

app.use(express.urlencoded({extended:false}));

//routes
app.use('/',userRoutes);
//static files

app.use(express.static(path.join(__dirname,'public')));



const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`App listening on port ${port}...`)});
