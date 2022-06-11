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
    
    
    const fullname_Client = req.body.fullname_Client ;
    const email_Client = req.body.email_Client ;
    const mdp_Client  = req.body.mdp_Client ;
    const date_inscription = req.body.date_inscription;
    const etat_ban = req.body.etat_ban;

    console.log(fullname_Client)
    console.log(email_Client)
    console.log(mdp_Client)
    console.log(date_inscription)
    console.log(etat_ban)
    
    

    db.query("INSERT INTO client (fullname_Client,email_Client,mdp_Client,date_inscription,etat_ban) VALUES (?,?,?,?,?)",
    [fullname_Client , email_Client ,mdp_Client, date_inscription , etat_ban ] , (err,result)=>{
        if(err) {console.log(err);}
        else {
            res.json({status : true})
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
                res.json({isLogin : true , fullname_Client : result[0].fullname_Client , idClient : result[0].idClient });
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

app.post("/add_to_chart",(req,res)=>{
    const quantite = req.body.quantite ;
    const idclient = req.body.idclient ;
    const idarticle = req.body.idarticle ;

    console.log(idclient)
    console.log(idarticle);

    db.query("INSERT INTO panier (quantite,idclient,idarticle) VALUES (?,?,?)",
    [quantite , idclient , idarticle] , 
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.json({progress : true});
                // console.log(result);
                // res.send({role : "Admin"});
            }
            else {
                res.send({message : "Error with Inserting Data "
            });
            }
        }
    })
})

app.post("/get_panier" , (req,res)=>{
    const idclient = req.body.idClient;
    console.log(idclient);
    db.query("SELECT * FROM panier WHERE idclient = ? " ,[idclient] , (err,result)=>{
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

app.post("/get_panier_article" , (req,res)=>{
    const IDarticle = req.body.idarticle;
    console.log(IDarticle);
    db.query("SELECT * FROM article WHERE IDarticle = ? " ,[IDarticle] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
                console.log(result)
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

app.post("/commande",(req,res)=>{
    const nom_article = req.body.nom_article;
    const prix = req.body.prix;
    const nombre_besoin = req.body.nombre_besoin;
    const fullname_Client = req.body.fullname_Client;
    const imgone = req.body.imgone ;
    const numero_tel = req.body.numero_tel ;
    const date_achat = req.body.date_achat;
    const date_delivery = req.body.date_delivery ;
    const wilaya = req.body.wilaya ;
    const addresse = req.body.addresse;
    const ville = req.body.ville ;
    const status = req.body.status ;
    const idClient = req.body.idClient;
    const IDarticle = req.body.IDarticle;
    db.query("INSERT INTO commande(nom_article,prix,nombre_besoin,fullname_Client,date_achat,date_delivery,imgone,numero_tel,wilaya,addresse,ville,status,idClient,IDarticle) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [nom_article,prix,nombre_besoin,fullname_Client,date_achat,date_delivery,imgone,numero_tel,wilaya,addresse,ville,status,idClient,IDarticle] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.json({Send : 'good' , message : "Success"});
            }
            else {
                res.send({message : "Error with Adding Data to DataBase"});
            }
        }
    })
})

app.get("/get_commande",(req,res)=>{
    db.query("SELECT * FROM commande" , (err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            // console.log(result);
            res.send(result);
        }
    })
})

app.post("/get_commande_per_client" , (req,res)=>{
    const idClient = req.body.idClient;
    db.query("SELECT * FROM commande WHERE idClient = ? " ,[idClient] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
            }
            else {
                res.send({message : "Error with fetching Orders Product" , 
                
            });
            }
        }
    })
})

app.put("/set_status_confirm" , (req,res)=>{
    const status = req.body.status
    const idCommande = req.body.idCommande ;
    console.log(idCommande);
    console.log(status);
    db.query("UPDATE commande SET status = ? WHERE idCommande = ?" ,[status , idCommande] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
            }
            else {
                res.send({message : "Error with fetching Orders Product" , 
                
            });
            }
        }
    })
})

app.put("/set_status_cancel" , (req,res)=>{
    const status = req.body.status
    const idCommande = req.body.idCommande ;
    console.log(idCommande);
    console.log(status);
    db.query("UPDATE commande SET status = ? WHERE idCommande = ?" ,[status , idCommande] , (err,result)=>{
        if(err){
            console.log(err);
        }
        else {
            if(result.length > 0){
                
                res.send(result);
            }
            else {
                res.send({message : "Error with fetching Orders Product" , 
                
            });
            }
        }
    })
})


app.listen(8000 , ()=>{
    console.log("Server is running");
})