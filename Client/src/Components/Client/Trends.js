import './Trends.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Card} from 'react-bootstrap'
import Product_Details from './Product_Details'
import New from './New';
import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link , 
  useNavigate
} from "react-router-dom";
import Axios from 'axios';
import { useState , useEffect} from 'react';
function Trends(){

    let naviagate = useNavigate();
    const [trendsItem , setTrendsItem] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        let isMounted = true 
        Axios.get("http://localhost:8000/get_trends_article").then((response)=>{
            console.log(response) 
            console.log(response.data)
            if(isMounted){
                setLoading(true)
                setTrendsItem(response.data)
            }
            
        })
        return ()=>{
            isMounted = false ;
        };
    },[])

    

    const getTrends_Item = ()=>{
        if(loading==true){
            if(trendsItem != null){
                return(
                trendsItem.map((p)=>(
                <Card style={{width : '14rem'}} className='mt-5 ml-9 card-product' key={p.IDarticle}>
                    <Link to={`Products/${p.category}/${p.sous_category}/${p.nom_article}/${p.IDarticle}`}>
                    <Card.Img 
                    variant='top' 
                        className='align-items-center' 
                        style={{width : "200px"}} 
                        src={require(`../Images/categorie/${p.imgone}.jpg`)}
                        onClick={()=>{
                            naviagate(`Products/${p.category}/${p.sous_category}/${p.nom_article}/${p.IDarticle}`);
                        }}
                     />
                    </Link>
                        <Card.Body>
                            <Card.Title>{p.nom_article}</Card.Title>
                            <Card.Text>{p.category}</Card.Text>
                            <Card.Text>
                            <div className='d-flex flex-row'>
                                <h6 className='text-danger'>{p.prix} DA</h6>
                                {/* <ul className='d-flex flex-row list-group'> */}
                                <div className='btn-product ml-5'>
                                    <a className='' href='#'><i class="bi bi-box"></i></a>
                                    {/* <a href='#'><i class="bi bi-heart"></i></a>
                                    <a href='#'><i class="bi bi-cart"></i></a> */}
                                </div>
                                {/* </ul> */}
                            </div>
                            </Card.Text>
                        </Card.Body>
            </Card>
                ))
            
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

    return(
        
        
        <div className='trends'>
            <h1 className='mt-5'><i className="fa fa-solid fa-fire" />Tendance</h1>
        <div className='d-flex flex-row trends-product'>
            {getTrends_Item()}
            
        </div>
            <New /> 
        </div>
        
        
    );
}

export default Trends;