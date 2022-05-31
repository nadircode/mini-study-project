const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

let isAuthClient = null

let setIsAuthClient = (isLogin)=>{
    isAuthClient = isLogin ;
}



app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    user : "root" ,
    host : "localhost" , 
    password : "root" , 
    database : "ecommercesystem"
}); 
/* User*/
app.post("/create_user" , (req,res) =>{
    console.log(req.body.fullname_Client);
    // const idClient = req.body.idClient;
    const fullname_Client = req.body.fullname_Client ;
    const email_Client = req.body.email_Client ;
    const mdp_Client  = req.body.mdp_Client ;
    // const code_mdp_oublie = req.body.code_mdp_oublie;
    const date_inscription = req.body.date_inscription;
    const etat_ban = req.body.etat_ban;

    db.query("INSERT INTO client (fullname_Client,email_Client,mdp_Client,date_inscription,etat_ban) VALUES (?,?,?,?,?)",
    [fullname_Client , email_Client ,mdp_Client, date_inscription , etat_ban ] , (err,result)=>{
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
                // res.send(result);
                res.json({isLogin : true , id : result[0].IDarticle , result : result});
                setIsAuthClient(true);
            }
            else{
                res.send({isLogin : false});
            }
            
        }
    })

    
});

app.post("/logoutclient" , (req,res)=>{
    setIsAuthClient(req.body.isLogin);
    console.log(isAuthClient);
})

app.get("/isAuthentificated",(req,res)=>{
    console.log(isAuthClient);
    if(isAuthClient){
        res.json({auth : true});
        
    }
    else {
        res.json({auth : false});
    }
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
                res.send({message : "wrong email or Password"  });
            }
        }
    })
})

/* Article */

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

app.post("/create_article" ,upload.single('image') ,  (req,res)=>{
    const IDarticle = req.body.IDarticle ;
    const prix = req.body.prix ;
    const nom_article = req.body.nom_article ;
    const description = req.body.description ;
    const nbr_etoile = req.body.nbr_etoile ;
    const nombre_enstock = req.body.nombre_enstock ;
    const etat_article = req.body.etat_article ;
    
    var imgsrc =  req.body.imageOne ;
    console.log(etat_article);
    console.log(IDarticle);
    console.log(imgsrc);
    db.query("INSERT INTO article(IDarticle,prix,nom_article,description,nbr_etoile,nombre_enstock,etat_article,imgone) VALUES (?,?,?,?,?,?,?,?)" , 
    [IDarticle,prix,nom_article,description,nbr_etoile,nombre_enstock,etat_article,imgsrc] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            res.send(result);
            console.log("Data was insert into article table success");
            console.log("Image was uploaded with success");
        }
    })
})

app.get("/get_article",(req,res)=>{
    db.query("SELECT * FROM article" , (err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            // console.log(result);
            res.send(result);
        }
    })
})

app.get("/get_trends_article",(req,res)=>{
    db.query("SELECT * FROM article WHERE etat_article='Tendance' " ,(err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            // console.log("Data of trends Items\n");
            // console.log(result);
            res.send(result);
        }
    })
})

app.get("/get_new_article",(req,res)=>{
    db.query("SELECT * FROM article WHERE etat_article='Nouveau' " ,(err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            // console.log("Data of New Items\n");
            // console.log(result);
            res.send(result);
        }
    })
})


app.post("/product_details" , (req,res)=>{
    const IDarticle = req.body.id;
    console.log(IDarticle);
    db.query("SELECT * FROM article WHERE IDarticle = ? " ,[IDarticle] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                // console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with fetching Data" , 
                // role : "Client"
            });
            }
        }
    })
})

app.post("/add_favourite_product" , (req,res)=>{
    const IDarticle = req.body.IDarticle;
    const prix = req.body.prix ;
    const nom_article = req.body.nomarticle ;
    const description = req.body.description ;
    const nbr_etoile = req.body.nbr_etoile ;
    const imgone = req.body.imgone ;
    const category = req.body._category ;
    const sous_category = req.body._sous_category ;
    console.log(IDarticle);
    db.query("INSERT INTO favourites (prix,nom_article,description,nbr_etoile,imgone,category,sous_category,IDarticle) VALUES (?,?,?,?,?,?,?,?)",
    [prix,nom_article,description,nbr_etoile,imgone,category,sous_category,IDarticle] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                // console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with fetching Data" , 
                role : "Client"
            });
            }
        }
    })
})

app.get("/get_favourite_article",(req,res)=>{
    db.query("SELECT * FROM favourites " ,(err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            // console.log("Data of New Items\n");
            // console.log(result);
            res.send(result);
        }
    })
})

app.post("/delete_favourite_article" , (req,res)=>{
    const IDarticle = req.body.IDarticle;
    console.log("This ID : " + IDarticle + "Has been deleted");
    db.query("DELETE FROM favourites WHERE IDarticle = ? ",
    [IDarticle] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                // console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with fetching Data" , 
                role : "Client"
            });
            }
        }
    })
}
)

app.post("/get_sous_category" , (req,res)=>{
    const sous_category = req.body.sous_category;
    // console.log(sous_category);
    db.query("SELECT * FROM article WHERE sous_category = ? " ,[sous_category] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with fetching Data" , 
                // role : "Client"
            });
            }
        }
    })
})

app.post("/get_product_item" , (req,res)=>{
    const sous_category = req.body.sous_category_v;
    console.log(sous_category);
    db.query("SELECT * FROM article WHERE sous_category = ? " ,[sous_category] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                // console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with fetching Data" , 
                // role : "Client"
            });
            }
        }
    })
})



app.listen(8000 , ()=>{
    console.log("Server is running");
})