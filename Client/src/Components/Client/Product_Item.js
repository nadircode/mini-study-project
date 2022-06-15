import  Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './Filter.css';

 function Product_Item({items}){

    console.log(items)

    

    const [product , setProduct] = useState([])
    const [loading , setLoading] = useState(false)
    
    let sous_category = ""

    useEffect(()=>{
        let isMounted = true 
        if(isMounted){
        setProduct(items)
        
        }
        return ()=>{
                    isMounted = false ;
             };
    },[items])

    const getSousCategory = ()=>{
        // if(loading==true){
            if(product != null){
                
                return(
                product.map((p)=>(
                    <div class="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" key={p.IDarticle}>
                    <div class="card"> <img class="card-img-top" src={require(`../Images/categorie/${p.imgone}.jpg`)} />
                        <div class="card-body">
                            <h6 class="font-weight-bold pt-1">{p.nom_article}</h6>
                            <div class="text-muted description">{p.description}</div>
                            <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> </div>
                            <div class="d-flex align-items-center justify-content-between pt-3">
                                <div class="d-flex flex-column">
                                    <div class="h6 font-weight-bold">{p.prix} DA</div>
                                </div>
                                <div class="btn btn-primary">Acheter</div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            
                )
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


    return(
    <section id="products">
        
    <div class="container py-3">
        <div class="row">
            
            {getSousCategory()}
        </div>
    </div>
</section>)
}
 

export default Product_Item ;