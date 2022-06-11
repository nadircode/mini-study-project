import './Product_Details.css'
import Comment from './Comment'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

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


	const [error , setErrorMsg] = useState('')

	const [quantite , setQuantite] = useState()

	const [panier , setPanier] = useState([{
		IDarticle : null, 
		nom_article  : '' ,
		category : '' , 
		sous_category : '' , 
		prix : null , 
		nbr_etoile : null
	}]);

	const [auth , setAuth] = useState(false)


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

	let idclient = null

	const [datas , setData] = useState({})

	let add_toPanier = (p)=>{
		if(auth){
			if(quantite <= p.nombre_enstock){
			Axios.post("http://localhost:8000/add_to_chart",{
				quantite : quantite ,
				idclient : idClient ,
				idarticle : p.IDarticle
			}).then((response)=>{
				setData(response.data)
				if(datas.progress){
					alert("votre a éte ajouté avec succes")
				}
			})
		}
		else {
			setErrorMsg("Cette quantité n’est pas disponible")
		}
			
		}	
		else {
			alert("essayer de connecter ou creéer un compte");
		}
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
							<input 
							type='number' 
							style={{width : '50px' , marginLeft  : '15px' , border : '1px solid  '}}
							onChange={(e)=>{
								if(e.target.value > p.nombre_enstock){
									setErrorMsg("Cette quantité n’est pas disponible")
								}
								else {
									setQuantite(e.target.value)
									setErrorMsg('')
								}
							}}
							
							/>
							<h5 className='text-danger'>{error}</h5>
						</div>
                        <div className='btn-commander mt-2'>
						<button class="like btn btn-default" type="button" onClick={()=>{add_tofavourites(p)}}><span class="fa fa-heart"></span></button>
						
                        </div>
					</div>
					
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