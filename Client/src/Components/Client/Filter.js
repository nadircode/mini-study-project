import { useEffect, useState } from 'react'
import './Filter.css'
import Product_Item from './Product_Item';
import Axios from 'axios';
import { Link, useNavigate , useParams , Navigate } from 'react-router-dom';
export default function Filter({items}){
    console.log(items)

    let {sous_category} = useParams()
    let naviagate = useNavigate();

    console.log(sous_category)
    
    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(false)

    let  sous_category_v = ""

    useEffect(()=>{
		let isMounted = true 
		Axios.post("http://localhost:8000/get_product_item",{
            sous_category_v : sous_category
        }).then((response)=>{
			
			if(isMounted){
            console.log("2")
            console.log(response.data)
			setLoading(true)
			setProduct(response.data)
			}
		})
		return ()=>{
            isMounted = false ;
        };
	},[])
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

    const getSousCategory = ()=>{
        if(loading==true){
            if(product != null){
                
                return(
                product.map((p)=>(
                    
                    <div 
                    class="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" 
                    key={p.IDarticle}
                    >
                    
                    <div class="card"> <img class="card-img-top" src={require(`../Images/categorie/${p.imgone}.jpg`)} />
                        <div class="card-body">
                            <h6 class="font-weight-bold pt-1">{p.nom_article}</h6>
                            <div class="text-muted description">{p.sous_category}</div>
                            <div class="d-flex align-items-center product"> <span>{set_Stars(p)}</span> </div>
                            <div class="d-flex align-items-center justify-content-between pt-3">
                                <div class="d-flex flex-column">
                                    <div class="h6 font-weight-bold">{p.prix} DA</div>
                                </div>
                                <Link to={`/app/Products/${p.category}/${p.sous_category}/${p.nom_article}/${p.IDarticle}`} replace>
                                <div class="btn btn-primary" 
                                >Acheter</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            )
            
                ))
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
        
        <div class="content py-md-0 py-3 mx-2 filter-main d-flex flex-row">
        <section id="sidebar">
            <div class="pt-1">
                <h5 class="font-weight-bold">Featured Brands</h5>
                <form class="brand">
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">HP<input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">SanDisk <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Apple <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">LogiTech <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Known <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Rating</h5>
                <form class="rating">
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Availibaility</h5>
                <form class="rating">
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick">In Stock <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Price</h5>
                <form class="price">
                    <div className='d-flex flex-row'>
                        <input type='number' placeholder='min' step='5' />
                        <input type='number' placeholder='max' step='5' />
                    </div>
                </form>
            </div>
            <div class="pt-2">
                <form class="apply">
                    <div className='d-flex flex-row float-end'>
                        <button className='btn btn-primary'>
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <section id="products">
        
            <div class="container py-3">
                <div class="row">
                    
                    {getSousCategory()}
                </div>
            </div>
        </section>
        
        </div> 
    
    )
}