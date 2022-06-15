import './NavBarClient.css';
// import pic from '../Images/Logo.png'
import AuthClient from './AuthClient';
import {Button , Form, Modal ,Dropdown , FloatingLabel } from 'react-bootstrap';
import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link , 
  useNavigate,
  useParams
} from "react-router-dom";
import { useState , useEffect} from 'react';
import Product_Details from './Product_Details';
import Axios from 'axios';
import logo from '../Images/Logo.png'


function NavBarClient(props){
   /* SignUp*/ 

    let {bool} = useParams()

    const [query , setQuery] = useState('')



    const [clientList , setClientList] = useState([]);

    const [loading , setLoading] = useState(false);
    const [refresh , setRefresh] = useState(false)
    let navigate = useNavigate()

    const[error , setError] = useState('')

    let isLogin = null ;

    const [clinetAuth , setclientAuth] = useState([])

    useEffect(()=>{
        console.log(clinetAuth.isLogin)
        if(clinetAuth.isLogin == true){
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    },[clinetAuth.isLogin])
    const [auth , setAuth] = useState(false)

    useEffect(()=>{
        let isMounted = true ;
        if(isMounted){
            console.log(JSON.parse(localStorage.getItem('isLogin')))
            let data = JSON.parse(localStorage.getItem('isLogin')) || [] ;
            console.log(data)
            if(data.length > 0 ){setAuth(data[data.length - 1].isLogin)}
            
            
        }
        return ()=>{
            isMounted = false ;
        };
    },[refresh])

    

    
    const [loginBtn , setLoginBtn] = useState(true)

    const [client , setClient] = useState([]);

    
    let IDClient = null

    

    let logoutClient = ()=>{
        
        let olditems = JSON.parse(localStorage.getItem('isLogin')) || [];
                var newItem = {
                    isLogin : false
                }
        olditems.push(newItem)
        localStorage.setItem('isLogin' ,JSON.stringify(olditems) );
        Axios.post("http://localhost:8000/logoutclient",{
            isLogin : false
        })
        setAuth(false) ; 
        clinetAuth.isLogin == false;
        window.open("http://localhost:3000" , "_self");
    }

    let keyPress = (e)=>{
        if(e.key=="Enter"){
            loginClient();
        }
    }

    let startQuery = ()=>{
        if(query != ''){
            window.open(`http://localhost:3000/app/search/${query}` , "_self")
        }

    }
    
    return (
        <div className='main-container sticky-top'>
        <div className="">
            <div className="navbar navbar-expand-lg navbar-client sticky-top position-sticky">
                
                <a className="navbar-brand col-3">
                <img
                     src={logo}
                     height="25"
                     alt=""
                     loading="lazy"
                     style={{marginTop : "20px"}}
                />
                </a>
                <div class="col-6 input d-flex flex-row">
                    <div className='d-flex flex-row'>
                    <input type="search" className="form-control w-5 input-search" placeholder="Search" 
                    onChange={(e)=>{setQuery(e.target.value)}}
                    />
                    <a type='button'
                        onClick={startQuery}
                    ><i class="bi bi-search"></i> $
                    </a>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='btn-navbar'>
                    {/* <button className='panier border-0 btn'><i class="bi bi-cart"></i></button> */}
                    {auth== false ?
                    <>
                    <Button variant='outline-light' onClick={()=>{
                        navigate('/login')
                    }}>
                        Login
                    </Button>
                    <Button variant='light' onClick={()=>{
                        navigate('/signup')
                    }}>
                        SignUp
                    </Button>
                    </>
                    : 
                    

                    <Button variant='light' type='submit' onClick={logoutClient}>
                        Se Déconnecter
                    </Button>
                    
                    }
                    {/* <button className='btn btn-outline-light'>Login</button>
                    <button className='btn btn-light '>SignUp</button> */}
                    </div>
                </div>
                </div>
                
            </div>
           
            
            </div>
        
    );
}

export default NavBarClient;