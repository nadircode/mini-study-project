import './Login.css';
import logo from '../Images/Logo2.png';
import { useState , useEffect } from 'react';
import {Button , Form, Modal ,Dropdown , FloatingLabel } from 'react-bootstrap';
import Axios from 'axios';
function SignUp(){
    const time = new Date()

    const [idClient , setIdClient] = useState();
    const [fullname_Client , setFullname_Client] = useState("");
    const [email_Client , setEmail_Client] = useState("");
    const [mdp_Client , setMdp_Client] = useState("");
    const [mdp_Client2 , setMdp_Client2] = useState("");
    // const [code_mdp_oublie , setCode_mdp_oublie] = useState('');
    const [date_inscription , setDate_inscription] = useState(`${time.getDay()+5}/${time.getMonth()+1}/${time.getFullYear()}`);
    const [etat_ban , setEtat_ban] = useState('false');
    const [checked , setChecked] = useState(false)



    const [errorMsg , setErrorMsg] = useState('')
    const [loginBtn , setLoginBtn] = useState(true)
    const [success , setSuccess] = useState(false)


    const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

  let addClient  = ()=>{
    if(fullname_Client != '' && isValidEmail(email_Client) && mdp_Client.length >= 8 && mdp_Client2 == mdp_Client && checked){
    setLoginBtn(false)
    
    console.log(fullname_Client)
    
    console.log(etat_ban);
    console.log(date_inscription)
    Axios.post("http://localhost:8000/create_user",{
        
        fullname_Client : fullname_Client ,
        email_Client : email_Client ,
        mdp_Client : mdp_Client ,
        date_inscription : date_inscription ,
        etat_ban : etat_ban
    }).then((res)=>{
        console.log(res)
        if(res.status){
          setLoginBtn(true)
          setSuccess(true)
        }
    })
  }
  else {
    setErrorMsg('remplir tous les champs de formulaire')
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
        { success ? <div>patientez svp pour redirecting you vers le Login Page</div>
        :
        ( <>
        <h1>SignUp</h1>
        <h6 className='text-danger'>{errorMsg}</h6>
        

        <form class="flex-c">

          <div class="input-box">
            <span class="label">le Nom et Le Prénom</span>
            <div class=" flex-r input-login-signup">
            <Form.Control 
                        type="email" 
                        placeholder="le Nom et Le Prénom" 
                        onChange={(e)=>{setFullname_Client(e.target.value)}}
                        required 
            />
              <i class="fas fa-user-tie"></i>
            </div>
          </div>
          <div class="input-box">
            <span class="label">E-mail</span>
            <div class=" flex-r input-login-signup">
            <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        isValid={isValidEmail(email_Client)}
                        isInvalid={!isValidEmail(email_Client)}
                        onChange={(e)=>{setEmail_Client(e.target.value)}}
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
                          setMdp_Client(e.target.value) ; 
                          
                        }} 
                        isValid={mdp_Client.length >= 8}
                        isInvalid={mdp_Client.length < 8}
            />
              <i class="fas fa-lock"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Confirmer Mot de Passe</span>
            <div class="flex-r input-login-signup">
            <Form.Control 
                        type="password" 
                        placeholder="Confirmer Mot de Passe" 
                        onChange={(e)=>{setMdp_Client2(e.target.value)}} 
                        isValid={mdp_Client == mdp_Client2}
                        isInvalid={mdp_Client != mdp_Client2}
            />
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <div class="">
            <input type="checkbox" name="" id="" 
              checked={checked}
              onChange={(e)=>{setChecked(e.target.checked)}}
            />
            <span> j'accepte les régles et les conditions d'utilisation</span>
          </div>

          <button class="btn-login-signup" type="submit" onClick={addClient}>
          {loginBtn ? 'Créer un compte' 
                        : <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                      </div>}
            </button>
          <span class="extra-line">
            <span>Vous avez déja un compte?</span>
            <a href="http://localhost:3000/login">Login</a>
          </span>
        </form>
        </>
        )
      }
      </div>
    </div>
  </div>
</div>    
)
}

export default SignUp ;