const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user : "root" ,
    host : "localhost" , 
    password : "root" , 
    database : "ecommercesystem"
}); 

app.post("/create_user" , (req,res) =>{
    console.log(req.body.fullname_Client);
    const idClient = req.body.idClient;
    const fullname_Client = req.body.fullname_Client ;
    const email_Client = req.body.email_Client ;
    const mdp_Client  = req.body.mdp_Client ;
    const code_mdp_oublie = req.body.code_mdp_oublie;
    const date_inscription = req.body.date_inscription;
    const etat_ban = req.body.etat_ban;

    db.query("INSERT INTO client (idClient,fullname_Client,email_Client,mdp_Client,code_mdp_oublie,date_inscription,etat_ban) VALUES (?,?,?,?,?,?,?)",
    [idClient,fullname_Client , email_Client , mdp_Client , code_mdp_oublie , date_inscription , etat_ban ] , (err,result)=>{
        if(err) {console.log(err);}
        else {
            res.send("Value inserted");
            console.log("IS worked GET");
        }
    })
}); 

app.post("/client",(req,res)=>{
    const email_Client = req.body.emailLogin;
    const mdp_Client = req.body.mdpLogin ;
    
    db.query("SELECT * FROM client WHERE email_Client = ? AND mdp_Client = ? " ,[email_Client,mdp_Client] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result){
                res.send(result);
            }
            else{
                res.send({message : "Wrong email or Password " , role : "admin"});
            }
            
        }
    })

    
})

app.post("/admin" , (req,res)=>{
    const emailAdmin = req.body.emailLogin;
    const passwordAdmin = req.body.mdpLogin ;
    db.query("SELECT * FROM admin WHERE emailAdmin = ? AND passwordAdmin = ? " ,[emailAdmin, passwordAdmin] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                res.send(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "wrong email or Password" , 
                role : "Client"
            });
            }
        }
    })
})

// app.get("/admin",(req,res)=>{
//     db.query("SELECT * FROM admin" , (err,result)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(result);
//         }
//     })
// })

// app.get("/get_user" , (req , res)=>{
//     db.query("SELECT * from user",(err , result)=>{
//         if(err) console.log(err);
//         else{
//             res.send(result);
//             console.log("IS worked GET");
//         }
//     })
// })

app.listen(8000 , ()=>{
    console.log("Server is running");
})