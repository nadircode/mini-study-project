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

	useEffect(()=>{
		let isMounted = true 
		Axios.post("http://localhost:8000/product_details",{
			id : id
		}).then((response)=>{
			// console.log(response.data)
			if(isMounted){
			setLoading(true)
			setpDetails(response.data);
			console.log(p_details);
			}
		})
		return ()=>{
            isMounted = false ;
        };
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
							<button class="add-to-cart btn btn-default" type="button">Ajouter au Panier</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
                        <div className='btn-commander mt-2'>
                            <button type='button' className='btn btn-lg btn-danger'>Commander</button>
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