import './Login.css';
import logo from '../Images/Logo2.png';
import { useState , useEffect } from 'react';
import {Button , Form, Modal ,Dropdown , FloatingLabel } from 'react-bootstrap';
import Axios from 'axios';
import {
  BrowserRouter as Router , 
Routes,
Route,
Link , 
useNavigate,
useParams
} from "react-router-dom";
function Login(){

  const [emailLogin , setEmailLogin] = useState('')
  const [mdpLogin , setMdp_Login] = useState('')

  const [loginBtn , setLoginBtn] = useState(true)
  const [success , setSuccess] = useState(false)

  const [clinetAuth , setclientAuth] = useState([])

  const [errorMsg , setErrorMsg] = useState('')

  let navigate = useNavigate()

  const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

  let loginClient = ()=>{
    if(emailLogin != '' && mdpLogin != ''){
    setLoginBtn(false)
    let name_Client = ''
    let isLogin = null ;
    if(emailLogin == 'admin@gmail.com' && mdpLogin == 'admin'){
      window.open("http://localhost:3000/admin")
        console.log('Admin')
        setLoginBtn(true)
    }
    else {
    Axios.post("http://localhost:8000/client", { 
        emailLogin : emailLogin ,
        mdpLogin : mdpLogin
    }).then((response)=>{
        
        // setClient(response.data)
        
          console.log(response.data);
          setclientAuth(response.data)
          if(clinetAuth.isLogin){
            window.open("http://localhost:3000/",'_self')
              // setAuth(true)
              // setShowLogin(false)
              let olditems = JSON.parse(localStorage.getItem('isLogin')) || [] ;
              var newItem = {
                  isLogin : true ,
                  fullname_Client : clinetAuth.fullname_Client ,
                  idClient : clinetAuth.idClient
                  
              }
              olditems.push(newItem)
              console.log(newItem)
              localStorage.setItem('isLogin' ,JSON.stringify(olditems) );
              setLoginBtn(true)
              
          }
          else{
              setErrorMsg('Wrong Email or Pasword')
          }
        
        
        
    });
  }
     
}

else {
  setErrorMsg("remplir tous les champs")
}
}

    return(
        

<div class="login-signup">
  <div class=" flex-r container">
    <div class="flex-r login-wrapper">
      <div class="login-text">
        <div class="logo">
          
          <img src={logo} />
        </div>
        <h1>Login</h1>
        <h6 className='text-danger'>{errorMsg}</h6>
        

        <form class="flex-c">
          <div class="input-box">
            <span class="label">E-mail</span>
            <div class=" flex-r input-login-signup">
            <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        onChange={(e)=>{setEmailLogin(e.target.value)}}
                        required 
                        />
              <i class="fas fa-at"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Mot de Passe</span>
            <div class="flex-r input-login-signup">
            <Form.Control 
                        type="password" 
                        placeholder="Mot de Passe"  
                        onChange={(e)=>{
                          setMdp_Login(e.target.value) ; 
                        }} 
            />
              <i class="fas fa-lock"></i>
            </div>
          </div>

          <button class="btn-login-signup" type="button" onClick={loginClient}>
          {loginBtn ? 'Login' 
                        : <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                      </div>}
            </button>
          <span class="extra-line">
            <span>Vous n’avez pas de compte?</span>
            <a href="http://localhost:3000/signup">SignUp</a>
          </span>
        </form>

      </div>
    </div>
  </div>
</div>
    )
}

export default Login ;