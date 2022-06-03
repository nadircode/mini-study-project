import  Axios  from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import './Favourite.css'

export default function MyOrders(){

    const [ordersItem , setOrdersItem] = useState([])
    const [loading , setLoading] = useState(false)
    const [refresh , setRefresh] = useState(false)
    const [idClient , setIdClient] = useState()
    const [access ,setAccess] = useState(false)
    const [status , setStatus] = useState('en cours')
    
    

    useEffect(()=>{
        let isMounted = true ;
        if(isMounted){
            console.log(JSON.parse(localStorage.getItem('isLogin')))
            let data = JSON.parse(localStorage.getItem('isLogin'))
            console.log(data)
			setIdClient(data[data.length - 1].idClient)
            setAccess(true)
            // setRefresh(false)

            // setLoading(true)
            // console.log(panierItem)
        }
        return ()=>{
            isMounted = false ;
        };
    },[])

    useEffect(()=>{
        let isMounted = true ;
        if(access){
        Axios.post("http://localhost:8000/get_commande_per_client",{
            idClient : idClient
        }).then((res)=>{
            if(isMounted){
                setLoading(true)
                setOrdersItem(res.data)
                setRefresh(false)
                
            }
        })
    }
        return ()=>{
            isMounted = false ;
        };
    },[idClient])


    let IDarticle = 0
    let idCommande = null
    const [msg , setMsg] = useState('')
    let orders_confirm = (p)=>{
        console.log(p)
        Axios.put("http://localhost:8000/set_status_confirm",{
            status : 'confirmé' ,
            idCommande : p
        }).then((res)=>{
            console.log(res.data)
        })
    }
    let orders_cancel = (p)=>{
        Axios.post("http://localhost:8000/set_status_cancel",{
            status : 'annulé' , 
            idCommande : p
        }).then((res)=>{
            console.log(res.data)
        })
    }

    let get_Status=(p)=>{
        
        if(p.status == 'en cours'){
            setStatus('en cours')
            return(
                <>
                        <button class="btn btn-primary btn-sm" type="button"onClick={()=>{orders_confirm(p.idCommande)}} >
                                Confirmer La Commande
                        </button>
                        
                        <button class="btn btn-danger btn-sm mt-2" type="button" onClick={()=>{orders_cancel(p.idCommande)}}>
                            Annuler La Commande
                        </button>
                </>
            )
            
        }
        else if(p.status == 'confirmé'){
            setStatus('confirmé')
            return(
                <div>
                    <h6 className='text-success'>Votre commande est confirmé avec success <i class="bi bi-check"></i> </h6>
                </div>
            )
        }
        else if(p.status == 'annulé'){
            setStatus('annulé')
            return(
                <div>
                    <h6 className='text-danger'>Votre commande est annulé <i class="bi bi-x"></i></h6>
                </div>
            )
        }
    }

    let get_orders_article = ()=>{
		if(loading==true){
        //     if(p_details != null && p_details.imgone != undefined){
                return(
					<>
					
					{ ordersItem.map((p)=>(
                        <div class="row p-2 bg-white border rounded my-2" key={p.idCommande}>
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image " src={require(`../Images/categorie/${p.imgone}.jpg`)} /></div>
                        <div class="col-md-6 mt-1">
                    <h5>{p.nom_article}</h5>
                    
                    <p class="text-justify text-truncate para mb-0 flex-row">Categorie : {p.category}<br /><br /></p>
                    <p class="text-justify text-truncate para mb-0 flex-row">Sous Categorie : {p.sous_category}<br /><br /></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">{p.prix} DA</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4">
                        {get_Status(p)}
                    </div>
                </div>
                    </div>
                    ))
                    }
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
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-10">
                    <h1><i className='bi bi-heart'></i>Mes Commandes</h1>
                    { get_orders_article()}
                </div>
            </div>
        </div>
    )
}