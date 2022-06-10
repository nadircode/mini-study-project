import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './Images/Logo2.png';


function NavBar(){
    return(
        <div>
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
            style={{position : "fixed" , height : "5rem"}}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img
                            src={logo}
                            width='60'
                        />
                    </a>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        
                        

                        <li class="nav-item dropdown">
          <a
             class="nav-link  hidden-arrow d-flex align-items-center"
             >
            <img
                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                 class="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"

                 style={{width : "25px"}}
                 />
                 <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className='btn-dropdown'>
                        
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                       <Link to="/app" replace> <Dropdown.Item href="#/action-1">Go to Home Page</Dropdown.Item></Link>
                        <Dropdown.Item href="#/action-2">Product</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Se Déconnecter</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
          </a>
          
        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;