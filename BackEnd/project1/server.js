const express=require('express')
const mysql=require('mysql')
const multer=require('multer')
const bodyParser=require('body-parser')
const cors=require('cors')
const path=require('path')
app=express()
// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:"",
//     database:"backend",
// })
const db=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:"Srivalli@2",
    // database:"backend",
    // database:"nodejs_practice"
    database:"practice"
})
db.getConnection((err)=>{
    if(err) throw err;
    else{
        console.log("Connected!!")
    }
})
app.get("/",(req,res)=>{
    res.send("Home");
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/images',express.static('images'))

app.post("/insert",(req,res)=>{
    // res.send("Insert page");
    // const id='1228';
    // const name='sai';

    const id=req.body.date;
    const name=req.body.description;
    const k="open";

    // const sql=`insert into student (sid,sname) values(?,?)`;
    const sql=`insert into circulars (date,description,images) values(?,?,?)`;
    db.query(sql,[id,name,k],(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Inserted!!!")
        }
    })

})
app.post("/Delete",(req,res)=>{
    const id=req.body.sid;
    // const msql=`Delete from student where sid=("1203")`;
    const msql=`Delete from student where student.sid = (?)`;
    db.query(msql,[id],(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Deleted successfully!!");
            res.send("Delete")
        }
    })
    // res.send("Edit");
})

const storage =multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const upload = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:function(req,file,cb){
    var ext= path.extname(file.originalname)
    if(ext!='.png' && ext!='.jpeg' && ext!='.gif' && ext!='.jpg'){
        return cb(new Error('Only images files are allowed'))
    }
    else{
        return cb(null,true);
    }
}
})
app.post('/uploadimage',upload.single('file'),(req,res)=>{
    if(!req.file){
        console.log("File not found")
    }
    else{
        console.log(req.file.filename)
        var imgsrc=("http://127.0.0.1:3001/images/"+req.file.filename);
        // var sql=`UPDATE student SET studentcol = ? WHERE student.sid = '1205'`
        // db.query(sql,[imgsrc],(err)=>{
        //     if(err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log("Uploaded")
        //         // console.log(file)
        //     }
        // })
        // // res.send()

    }
})

app.post("/Delete/:sid",(req,res)=>{
    const id=req.params.sid;
    // const msql=`Delete from student where sid=("1203")`;
    const msql=`Delete from student where student.sid = (?)`;
    db.query(msql,[id],(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Deleted successfully!!");
            res.send("Delete")
        }
    })
    // res.send("Edit");
})

app.post("/Signup",(req,res)=>{
    const id=req.body.sid;
    const name=req.body.sname;
    // const sql="UPDATE `student` SET `sname` = 'pallu' WHERE `student`.`sid` = '1288'";
    const sql="UPDATE `student` SET `sname` = ? WHERE `student`.`sid` = ?;"
    db.query(sql,[name,id],(err)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.send("Updated successfully!!")
            console.log("updated!!")
        }
    })
    // res.send("signup page");
})

app.get("/Oneuser/:sid",(req,res)=>{
    const sid=req.params.sid;
    const sql=`select * from student where sid=?`
    db.query(sql,[sid],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
})

app.get("/Report",(req,res)=>{
    // res.send("Report page");
    // console.log("Report!!")
    db.query(`select * from circulars`,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result);
            
            res.send(result);
        }
    })
})

app.listen(3001,(req,res)=>{
    console.log("Server started!!");
})
