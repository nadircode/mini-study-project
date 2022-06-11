import  Axios  from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import {Button , Form, Modal} from 'react-bootstrap';
import './Favourite.css'

export default function ChartProduct(){

    const [panierItem , setPanierItem] = useState([])
    const [loading , setLoading] = useState(false)
    const [refresh , setRefresh] = useState(false)
    let navigate = useNavigate()
    const [auth , setAuth] = useState(false)

    const [idClient , setIdClient] = useState(null)

    const [article , setArticle] = useState([])

    const [idarticle , setIDarticle] = useState()

    const [access , setAccess] = useState(false)

    const [error , setError] = useState()

    const [idA, setIDA] = useState([])

    const [quantite , setQuantite] = useState(null)


    const [wilaya , setWilaya] = useState('')
	const [nombre_besoin , setNombre_besoin] = useState('')
	const [ville , setVille] = useState('')
	const [addresse , setAdresse] = useState('')
	const [phoneNumber , setPhoneNumber] = useState('')

    
	const [fullname_Client , setFullname_Client] = useState()
    

    

    useEffect(()=>{
        let isMounted = true ;
        if(isMounted){
            console.log(JSON.parse(localStorage.getItem('isLogin')))
            let data = JSON.parse(localStorage.getItem('isLogin'))
            console.log(data)
            setAuth(data[data.length - 1].isLogin)
            setFullname_Client(data[data.length - 1].fullname_Client)
            setIdClient(data[data.length - 1].idClient)
            fetchPanier(data[data.length - 1].idClient)  
            // setAccess(true)
            
        }
        return ()=>{
            isMounted = false ;
        };
    },[refresh])

    let fetchPanier = (idClient)=>{
        let isMounted = true
        Axios.post("http://localhost:8000/get_panier",{
                        idClient : idClient
                    }).then((response)=>{
                            if(isMounted){
                            setPanierItem(response.data)
                            panierItem.map((p)=>{
                                fetchArticle(p.idarticle)
                                setQuantite(p.quantite)
                            })
                            setRefresh(true) 
                            
                        }   
                    }).catch(error => setError(error))  
                           
    }

    

    let fetchArticle = (idarticle)=>{
        let isMounted = true
        Axios.post("http://localhost:8000/get_panier_article",{
                            idarticle : idarticle
                            }).then((response)=>{

                                if(isMounted){
                                    setArticle(article => [...article, response.data[0]])
                                    console.log("article")
                                    console.log(article)
                                     setLoading(true)  
                                }
                                
                               
                            }).catch(error=>{
                                setError(error)
                            })
                            

                            
    }


    


    let set_Stars = (p)=>{
		if(p.nbr_etoile == 0){
			return (
				<div class="ratings mr-2">

				</div>
			)
		}
		else if(p.nbr_etoile == 1){
			return(
				<div class="ratings mr-2">
					<i class="fa fa-star"></i>
				</div>
			)
		}
		else if(p.nbr_etoile == 2){
			return(
				<div class="ratings mr-2">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
				</div>
			)
		}
		else if(p.nbr_etoile == 3){
			return(
				<div class="ratings mr-2">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
				</div>
			)
		}
		else if(p.nbr_etoile == 4){
			return(
				<div class="ratings mr-2">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
				</div>
			)
		}
		else if(p.nbr_etoile == 5){
			return(
				<div class="ratings mr-2">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
				</div>
			)
		}
	}
    let IDarticle = 0
    // const [msg , setMsg] = useState('')
    // let delete_favourite_article = (p)=>{

    let commander = (p)=>{
        setShowForms(true)
    }
    let continuerCommande = (p)=>{
		const time = new Date();
		Axios.post("http://localhost:8000/commande",{
			nom_article : p.nom_article , 
			prix : p.prix ,
			nombre_besoin : quantite ,
			fullname_Client : fullname_Client ,
			imgone : p.imgone , 
			numero_tel : phoneNumber ,
			date_achat : `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}` ,
			date_delivery : `${time.getDay() + 5}/${time.getMonth()}/${time.getFullYear()}` ,
			wilaya : wilaya ,
			addresse : addresse ,
			ville : ville ,
			status : 'en cours' ,
			idClient : idClient , 
			IDarticle : p.IDarticle
			
		}).then((response)=>{
			console.log(response)
		})
	}
        
    // }

    let get_panier_article = ()=>{
		if(loading==true && article.length == panierItem.length){
            if(article.length > 0){
                return(
					
					<>
					 { article.map((product)=>(
                        <div class="row p-2 bg-white border rounded my-2" key={product.IDarticle}>
                        <div class="col-md-3 mt-1">
                            {product.imgone != undefined ?
                            <img class="img-fluid img-responsive rounded product-image " src={require(`../Images/categorie/${product.imgone}.jpg`)} />
                            : <div>Loading... </div>
                            }
                        </div>
                        <div class="col-md-6 mt-1">
                    <h5>{product.nom_article}</h5>
                    <div class="d-flex flex-row">
                        {set_Stars(product)}
                    </div>
                    
                    <p class="text-justify text-truncate para mb-0 flex-row">La Quantité : {quantite}<br /><br /></p>
                    
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{product.prix} DA</h4>
                    </div>
                    <div class="d-flex flex-column mt-4">
                    
                        <button class="btn btn-primary btn-sm"
                         type="button"
                         onClick={()=>{commander(product)}}
                         >
                                Commander
                        </button>
                    
                        <button class="btn btn-danger btn-sm mt-2" type="button" onClick={()=>{delete_favourite_article(product)}}>Supprimer</button>
                    </div>
                </div>
                <Modal show={showForms} onHide={closeForms}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Commander Produit
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Wilaya</Form.Label>
                            <Form.Control type='text' placeholder='Wilaya' onChange={(e)=>{setWilaya(e.target.value)}} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ville</Form.Label>
                            <Form.Control type='text' placeholder='Ville' onChange={(e)=>{setVille(e.target.value)}} />
                        </Form.Group>
						<Form.Group>
                            <Form.Label>Numéro de Telephone</Form.Label>
                            <Form.Control type='tel' placeholder='numéro de Telephone' onChange={(e)=>{setPhoneNumber(e.target.value)}} />
                        </Form.Group>
						<Form.Group>
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type='text' placeholder='Adresse' onChange={(e)=>{setAdresse(e.target.value)}} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={closeForms}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={()=>{continuerCommande(product)}}>
                    Confirmer La commande
                </Button>
                </Modal.Footer>
            </Modal>
                    </div>
                     ))
                         }
                         </>
					
                        )
            }
            
        }
        else if(loading == false){
            return(
                <div class="spinner-border text-black " role="status" style={{textAlign : 'center'}}>
                            <span class="sr-only">Loading...</span>
                </div>
            )
        }
        else {
            return(
                <div>Connect to the server correctly</div>
            )
        }
	}

    const [showForms , setShowForms] = useState(null)
	const closeForms = ()=>{setShowForms(false)}

    return (
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-10">
                    <h1><i className='bi bi-cart'></i>Panier</h1>
                    { get_panier_article()}
                </div>
            </div>
            
        </div>
    )
}