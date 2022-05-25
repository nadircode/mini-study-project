import  Axios  from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import './Favourite.css'

export default function ChartProduct(){

    const [panierItem , setPanierItem] = useState([])
    const [loading , setLoading] = useState(false)
    const [refresh , setRefresh] = useState(false)

    const [panierProduct , setPanierProduct] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        let isMounted = true ;
        if(isMounted){
            console.log(JSON.parse(localStorage.getItem('productPanier')))
            let data = JSON.parse(localStorage.getItem('productPanier'))
            console.log(data)
            setPanierItem(data)
            setRefresh(false)

            setLoading(true)
            console.log(panierItem)
        }
        return ()=>{
            isMounted = false ;
        };
    },[refresh])

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
        
    // }

    let get_panier_article = ()=>{
		if(loading==true){
            if(panierItem != null){
                return(
					
					<>
					 {panierItem.map((p)=>(
                        <div class="row p-2 bg-white border rounded my-2" key={p.IDarticle}>
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image " src={require(`../Images/categorie/${p.imgone}.jpg`)} /></div>
                        <div class="col-md-6 mt-1">
                    <h5>{p.nom_article}</h5>
                    <div class="d-flex flex-row">
                        {set_Stars(p)}
                    </div>
                    
                    <p class="text-justify text-truncate para mb-0 flex-row">Categorie : {p.category}<br /><br /></p>
                    <p class="text-justify text-truncate para mb-0 flex-row">Sous Categorie : {p.sous_category}<br /><br /></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{p.prix} DA</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                    <Link className='btn btn-primary btn-sm' to={`/app/Products/${p.category}/${p.sous_category}/${p.nom_article}/${p.IDarticle}`} replace>
                        <button class="btn btn-primary btn-sm" type="button">
                                Details
                        </button>
                    </Link>
                        <button class="btn btn-danger btn-sm mt-2" type="button" onClick={()=>{delete_favourite_article(p)}}>Supprimer</button>
                    </div>
                </div>
                    </div>
                    ))
                }
					</>
                        )
            }
            
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