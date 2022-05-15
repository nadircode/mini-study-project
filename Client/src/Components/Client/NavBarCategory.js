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
                        <Link class="nav-link" to="/"><i class="bi bi-house-door" style={{marginTop : "-5px"}}></i> Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/Favourite'><i class="bi bi-heart" style={{marginTop : "-2px"}}></i> Favourites</Link>
                    </li>
                    <li class="nav-item">
                        
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-headset"></i> Périphérique PC
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                               <Link to="/accesoires_perephiriques/clavier"> <Dropdown.Item href="#/action-1">Clavier</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/casque"><Dropdown.Item href="#/action-2">Casque</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/ecran"><Dropdown.Item href="#/action-3">Ecran</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/haut_parleur"><Dropdown.Item href="#/action-3">Haut Parleur</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/hdd_externe"><Dropdown.Item href="#/action-3">HDD Externe</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/manette"><Dropdown.Item href="#/action-3">Manette</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/microphone"><Dropdown.Item href="#/action-3">Microphone</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/souris"><Dropdown.Item href="#/action-3">Souris</Dropdown.Item></Link>
                               <Link to="/accesoires_perephiriques/usb"><Dropdown.Item href="#/action-3">USB</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-cpu"></i> Composants Pc
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Alimentation</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Boite</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Carte Graphique</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Carte Mere</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">CPU</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">HDD</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">RAM</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">SSD</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-laptop"></i> Laptops
                            </Dropdown.Toggle>
                            {/* <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Phone</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Cpu</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mouses</Dropdown.Item>
                            </Dropdown.Menu> */}
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-display"></i> Connectique
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Displayport</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">HDMI</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">VGA</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                 Autre
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Chaise Gaming</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tapis</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default NavBarCategory;