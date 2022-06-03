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

    const [idClient , setIdClient] = useState();
    const [fullname_Client , setFullname_Client] = useState("");
    const [email_Client , setEmail_Client] = useState("");
    const [mdp_Client , setMdp_Client] = useState("");
    const [code_mdp_oublie , setCode_mdp_oublie] = useState('');
    const [date_inscription , setDate_iscription] = useState();
    const [etat_ban , setEtat_ban] = useState(false);

    /* Login*/
    const [emailLogin , setEmailLogin] = useState("");
    const [mdpLogin , setMdpLogin] = useState("");

    /* Admin  */

    const [emailAdmin , setEmailAdmin] = useState("");
    const [passwordAdmin , setPasswordAdmin] = useState("");


    const [showLogin , setShowLogin] = useState(false);
    const [showSignup , setShowSignup] = useState(false);

    const handleClose_L = () => setShowLogin(false);
    const handleShow_L = () => {setShowLogin(true); setShowSignup(false);  setError('') ; setLoginBtn(true)}

    const handleClose_S = () => setShowSignup(false);
    const handleShow_S = () => {setShowSignup(true); setShowLogin(false);}

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
            
            // setRefresh(false)

            // setLoading(true)
            // console.log(panierItem)
        }
        return ()=>{
            isMounted = false ;
        };
    },[refresh])

    const addClient  = ()=>{
        let time = new Date()
        setDate_iscription(`${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`);
        setCode_mdp_oublie
        setEtat_ban("false");
        Axios.post("http://localhost:8000/create_user",{
            
            fullname_Client : fullname_Client ,
            email_Client : email_Client ,
            mdp_Client : mdp_Client ,
            date_inscription : date_inscription ,
            etat_ban : etat_ban
        }).then(()=>{
            setClientList([
                {
                    idClient : idClient ,
                    fullname_Client : fullname_Client ,
                    email_Client : email_Client ,
                    mdp_Client : mdp_Client ,
                    code_mdp_oublie : code_mdp_oublie ,
                    date_inscription : date_inscription ,
                    etat_ban : etat_ban
                }
            ])
        })
    }

    
    const [loginBtn , setLoginBtn] = useState(true)

    const [client , setClient] = useState([]);

    
    let IDClient = null

    let loginClient = ()=>{
        let name_Client = ''
        if(emailLogin == 'admin@gmail.com' && mdpLogin == 'admin'){
            navigate('/admin');
            console.log('Admin')
        }
        else {
        Axios.post("http://localhost:8000/client", { 
            emailLogin : emailLogin ,
            mdpLogin : mdpLogin
        }).then((response)=>{
            console.log(response.data);
            setclientAuth(response.data)
            // setClient(response.data)
            if(clinetAuth.isLogin){
                setAuth(true)
                setShowLogin(false)
                let olditems = JSON.parse(localStorage.getItem('isLogin')) || [] ;
                var newItem = {
                    isLogin : true ,
                    fullname_Client : clinetAuth.fullname_Client ,
                    idClient : clinetAuth.idClient
                }
                olditems.push(newItem)
                console.log(newItem)
                localStorage.setItem('isLogin' ,JSON.stringify(olditems) );
            }
            else{
                setError('Wrong Email or Pasword')
            }
            
        });
         
    }
    }

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
    }

    let keyPress = (e)=>{
        if(e.key=="Enter"){
            loginClient();
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
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className='btn-dropdown'>
                        All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    <div className='d-flex flex-row'>
                    <input type="search" className="form-control w-5 input-search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <i class="bi bi-search"></i> 
                    </div>
                </div>
                <div className='col-3'>
                    <div className='btn-navbar'>
                    {/* <button className='panier border-0 btn'><i class="bi bi-cart"></i></button> */}
                    {auth== false ?
                    <>
                    <Button variant='outline-light' onClick={handleShow_L}>
                        Login
                    </Button>
                    <Button variant='light' onClick={handleShow_S}>
                        SignUp
                    </Button>
                    </>
                    : 
                    <>
                    <Button variant='outline-light'>
                 <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className='btn-dropdown'>
                        
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{window.open("http://localhost:3000/mes_commandes" , "_blank")}}>Mes Commandes</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>
                     </Button>
                    <Button variant='light' onClick={logoutClient}>
                        Se Déconnecter
                    </Button>
                    </>
                    }
                    {/* <button className='btn btn-outline-light'>Login</button>
                    <button className='btn btn-light '>SignUp</button> */}
                    </div>
                </div>
                </div>
                
            </div>
            {/* Login Modal*/ }
            <Modal show={showLogin} onHide={handleClose_L} onKeyPress={keyPress}  >
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-title w-100 font-weight-bold'><h4>Login</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                   
                    
                    <div style={{color : 'red'}}>{error}</div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 h-1"
                        style={{"font-size" : "14px"}}
                    >
                        <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        style={{height : "50px"}}
                        onChange={(e)=>{setEmailLogin(e.target.value)}}
                        required 
                        isValid={emailLogin!=''} 
                        isInvalid={emailLogin == ''}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" style={{"font-size" : "14px"}}>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        style={{height : "50px"}} 
                        onChange={(e)=>{setMdpLogin(e.target.value)}} 
                        isValid={mdpLogin.length > 5}
                        isInvalid={mdpLogin <6}/>
                    </FloatingLabel>
                    <div className='justify-content-center list-group-item my-1' style={{marginLeft : "10rem"}}>
                        <a href='/forgot-password'>forgot password?</a>
                    </div>
                    <div className="d-grid gap-2 my-3">
                    <Button 
                    variant="primary" 
                    size="lg" 
                    type='submit'
                    onClick={loginClient}
                    >
                        {loginBtn ? 'Login' 
                        : <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>}
                    </Button>
                    </div>
                    <div className='text-center'>
                    <p>Not a member? <a href="#!" onClick={handleShow_S}>Register</a></p>
                    </div>
                    
                    </Modal.Body>
                    
            </Modal>
            {/* Login Modal*/ }
            <Modal show={showSignup} onHide={handleClose_S}>
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-title w-100 font-weight-bold'><h4>SignUp</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3 h-1"
                        style={{"font-size" : "14px"}}
                    >
                        <Form.Control type='text' placeholder="Full Name" style={{height : "50px"}} onChange={(e)=>{setFullname_Client(e.target.value)}} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 h-1"
                        style={{"font-size" : "14px"}}
                    >
                        <Form.Control type="email" placeholder="name@example.com" style={{height : "50px"}} onChange={(e)=>{setEmail_Client(e.target.value)}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" style={{"font-size" : "14px"}}>
                        <Form.Control type="password" placeholder="Password" style={{height : "50px"}} onChange={(e)=>{setMdp_Client(e.target.value)}} />
                    </FloatingLabel>
                    <div className="d-grid gap-2 my-3">
                    <Button variant="primary" size="lg" onClick={addClient}>
                        SignUp
                    </Button>
                    </div>
                    </Modal.Body>
                    
            </Modal>
            </div>
        
    );
}

export default NavBarClient;