import './NavBarCategory.css';
import {Dropdown} from 'react-bootstrap';
import {BrowserRouter as Router ,
Link , 
Routes
} from 'react-router-dom'
function NavBarCategory(){
    return (
        
        <div className='navbar navbar-expand-lg shadow bg-light rounded position-sticky'>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/"><i class="bi bi-house-door"></i>Home</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-heart"></i>Favourites</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/accesoires_perephiriques">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-headset"></i>Accesoires&Péripherique
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-cpu"></i>Computers Components
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-tablet"></i>Computers&Tablet
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-laptop"></i>Laptops
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-display"></i>Monitors
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-controller"></i>Console
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-mouse2"></i>Mouse&KeyBoards
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-phone"></i>Phones
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavBarCategory;