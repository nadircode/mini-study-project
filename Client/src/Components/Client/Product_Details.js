import './Product_Details.css'
import Comment from './Comment'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {Button , Form, Modal} from 'react-bootstrap';
import Axios  from 'axios';
export default function Product_Details(){

	let {id} = useParams();
	let {category}= useParams();
	let {sous_category} = useParams();
	let {nom_article} = useParams();
	const [idList , setIdList] = useState([]);
	const [p_details , setpDetails ] = useState([]);

	const [loading , setLoading] = useState(false)
	const [refresh , setRefresh] = useState(false)

	const [panier , setPanier] = useState([{
		IDarticle : null, 
		nom_article  : '' ,
		category : '' , 
		sous_category : '' , 
		prix : null , 
		nbr_etoile : null
	}]);

	useEffect(()=>{
		let isMounted = true 
		Axios.post("http://localhost:8000/product_details",{
			id : id
		}).then((response)=>{
			// console.log(response.data)
			if(isMounted){
			setLoading(true)
			setRefresh(true)
			setpDetails(response.data);
			console.log(p_details);
			}
		})
		return ()=>{
            isMounted = false ;
        };
	},[])

	const [auth , setAuth] = useState(null)
	const [idClient , setIdClient] = useState()
	const [fullname_Client , setFullname_Client] = useState()

	useEffect(()=>{
        let isMounted = true ;
        if(isMounted){
            console.log(JSON.parse(localStorage.getItem('isLogin')))
            let data = JSON.parse(localStorage.getItem('isLogin'))
            console.log(data)
            setAuth(data[data.length - 1].isLogin)
			setIdClient(data[data.length - 1].idClient)
			setFullname_Client(data[data.length - 1].fullname_Client)
            // setRefresh(false)

            // setLoading(true)
            // console.log(panierItem)
        }
        return ()=>{
            isMounted = false ;
        };
    },[refresh])


	useEffect(()=>{
		Axios.get("http://localhost:8000/isAuthentificated").then((response)=>{
			console.log(response.data)
		})
	},[])
	let set_Images = (p) =>{
		if(p.imgtwo != null && p.imgthree != null)
		{
			return(
			<>
				<div class="tab-pane" id="pic-2"><img src={require(`../Images/categorie/${p.imgtwo}.jpg`)} /></div>
				<div class="tab-pane" id="pic-3"><img  src={require(`../Images/categorie/${p.imgthree}.jpg`)}/></div>
			</>
			)
		}
		else 
			return (
				<div></div>
			)
	}
	let set_Stars = (p)=>{
		if(p.nbr_etoile == 0){
			return (
				<div class="stars">
					<span class="fa fa-star "></span>
					<span class="fa fa-star "></span>
					<span class="fa fa-star "></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
				</div>
			)
		}
		else if(p.nbr_etoile == 1){
			return(
				<div class="stars">
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star "></span>
					<span class="fa fa-star "></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
				</div>
			)
		}
		else if(p.nbr_etoile == 2){
			return(
				<div class="stars">
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star "></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
				</div>
			)
		}
		else if(p.nbr_etoile == 3){
			return(
				<div class="stars">
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
					<span class="fa fa-star"></span>
				</div>
			)
		}
		else if(p.nbr_etoile == 4){
			return(
				<div class="stars">
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star"></span>
				</div>
			)
		}
		else if(p.nbr_etoile == 5){
			return(
				<div class="stars">
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
					<span class="fa fa-star checked"></span>
				</div>
			)
		}
	}
	const IDarticle = 0
	const prix = 0
	const nomarticle = ""
	const description = ""
	const nbr_etoile = ""
	const imgone = ""
	const _category = ""
	const _sous_category = ""


	let add_toPanier = (p)=>{
		let olditems = JSON.parse(localStorage.getItem('productPanier')) || [];
		var newItem = {
			IDarticle : p.IDarticle ,
			nom_article : p.nom_article ,
			category : p.category , 
			sous_category : p.sous_category , 
			imgone : p.imgone ,
			prix : p.prix ,
			nbr_etoile : p.nbr_etoile
		};
		olditems.push(newItem)
		localStorage.setItem('productPanier' ,JSON.stringify(olditems) );	
	}

	let add_tofavourites = (p)=>{
		Axios.post("http://localhost:8000/add_favourite_product",{
			 IDarticle : p.IDarticle , 
			 prix : p.prix ,
			 nomarticle : p.nom_article ,
			 description : p.description ,
			 nbr_etoile : p.nbr_etoile ,
			 imgone : p.imgone ,
			 _category : p.category ,
			 _sous_category : p.sous_category
		}).then((res)=>{
			console.log(res);
		})
	}

	let get_productDetails = ()=>{
		if(loading==true){
        //     if(p_details != null && p_details.imgone != undefined){
                return(
					<>
					
					{p_details.map((p)=>(

						<div class="wrapper row"  key={p.IDarticle}>
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content" >
						  <div class="tab-pane active" id="pic-1"><img src={require(`../Images/categorie/${p.imgone}.jpg`)} style={{width : '500px'}} /></div>
						  {set_Images(p)}
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={require(`../Images/categorie/${p.imgone}.jpg`)}/></a></li>
						{( p.imgtwo != undefined && p.imgthree != undefined )?
						  (<><li><a data-target="#pic-2" data-toggle="tab"><img src={require(`../Images/categorie/${p.imgtwo}.jpg`)} /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src={require(`../Images/categorie/${p.imgthree}.jpg`)} /></a></li> </>)
						  :(<div></div>)
						}
						</ul>

						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{p.nom_article}</h3>
						<div class="rating">
							{set_Stars(p)}
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">{p.description}</p>
						<h4 class="price">prix <span className='text-danger'>{p.prix} Da</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button" onClick={()=>{add_toPanier(p)}}>Ajouter au Panier</button>
							<button class="like btn btn-default" type="button" onClick={()=>{add_tofavourites(p)}}><span class="fa fa-heart"></span></button>
						</div>
                        <div className='btn-commander mt-2'>
                            <button 
							type='button'
							 className='btn btn-lg btn-danger'
							 onClick={commande}
							>Commander</button>
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
                            <Form.Label>Nombre de Produits</Form.Label>
                            <Form.Control type='number' placeholder='Nombre de Produit' onChange={(e)=>{setNombre_besoin(e.target.value)}} />
                        </Form.Group>
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
                <Button variant="primary" onClick={()=>{continuerCommande(p)}}>
                    Commander
                </Button>
                </Modal.Footer>
            </Modal>
				</div>
					))}
					</>	
                )
        //     }
        }
        else if(loading == false){
            return(
                <div>Loading...</div>
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

	const [wilaya , setWilaya] = useState('')
	const [nombre_besoin , setNombre_besoin] = useState('')
	const [ville , setVille] = useState('')
	const [addresse , setAdresse] = useState('')
	const [phoneNumber , setPhoneNumber] = useState('')

	let commande = ()=>{
		if(auth){
			setShowForms(true)
		}
		else {
			alert("You are not Login")
		}
	}
	let date_achat = '' 
	let date_delivery = ''
	let status = ''


	let continuerCommande = (p)=>{
		const time = new Date();
		Axios.post("http://localhost:8000/commande",{
			nom_article : p.nom_article , 
			prix : p.prix ,
			nombre_besoin : nombre_besoin ,
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



    return (
        <>
		
        <div class="container my-5">
		<div class="card-details-product">
			<div class="container-fliud">
				{get_productDetails()}
			</div>
		</div>
		
	</div>
    <Comment />
    </>
    )
}