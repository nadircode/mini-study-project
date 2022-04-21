import './NavBarClient.css';
// import pic from '../Images/Logo.png'
import {Button , Form, Modal ,Dropdown , FloatingLabel } from 'react-bootstrap';
import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Product_Details from './Product_Details';
function NavBarClient(){
    const [showLogin , setShowLogin] = useState(false);
    const [showSignup , setShowSignup] = useState(false);

    const handleClose_L = () => setShowLogin(false);
    const handleShow_L = () => {setShowLogin(true); setShowSignup(false)}

    const handleClose_S = () => setShowSignup(false);
    const handleShow_S = () => {setShowSignup(true); setShowLogin(false);}
    
    return (
        <div className='main-container sticky-top'>
        <div className="">
            <div className="navbar navbar-expand-lg navbar-client sticky-top position-sticky">
                
                <a className="navbar-brand col-3">
                <img
                     src={process.env.PUBLIC_URL+"Logo.png"}
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
                    <button className='panier border-0 btn'><i class="bi bi-cart"></i></button>
                    <Button variant='outline-light' onClick={handleShow_L}>
                        Login
                    </Button>
                    <Button variant='light' onClick={handleShow_S}>
                        SignUp
                    </Button>
                    {/* <button className='btn btn-outline-light'>Login</button>
                    <button className='btn btn-light '>SignUp</button> */}
                    </div>
                </div>
                </div>
                
            </div>
            <Modal show={showLogin} onHide={handleClose_L}>
                    <Modal.Header closeButton>
                        <Modal.Title className='modal-title w-100 font-weight-bold'><h4>Login</h4></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 h-1"
                        style={{"font-size" : "14px"}}
                    >
                        <Form.Control type="email" placeholder="name@example.com" style={{height : "50px"}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" style={{"font-size" : "14px"}}>
                        <Form.Control type="password" placeholder="Password" style={{height : "50px"}}/>
                    </FloatingLabel>
                    <div className='justify-content-center list-group-item my-1' style={{marginLeft : "10rem"}}>
                        <a href='/forgot-password'>forgot password?</a>
                    </div>
                    <div className="d-grid gap-2 my-3">
                    <Button variant="primary" size="lg">
                        Login
                    </Button>
                    </div>
                    <div className='text-center'>
                    <p>Not a member? <a href="#!" onClick={handleShow_S}>Register</a></p>
                    </div>
                    </Modal.Body>
                    
            </Modal>

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
                        <Form.Control type='text' placeholder="Full Name" style={{height : "50px"}} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 h-1"
                        style={{"font-size" : "14px"}}
                    >
                        <Form.Control type="email" placeholder="name@example.com" style={{height : "50px"}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" style={{"font-size" : "14px"}}>
                        <Form.Control type="password" placeholder="Password" style={{height : "50px"}}/>
                    </FloatingLabel>
                    <div className="d-grid gap-2 my-3">
                    <Button variant="primary" size="lg">
                        SignUp
                    </Button>
                    </div>
                    </Modal.Body>
                    
            </Modal>
            </div>
        
    );
}

export default NavBarClient;