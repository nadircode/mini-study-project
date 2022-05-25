import './NavBarCategory.css';
import {Dropdown , Form} from 'react-bootstrap';
import {BrowserRouter as Router ,
Link , 
Routes , 
useNavigate
} from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import Product_Item from './Product_Item';
import Data from './Data';
function NavBarCategory(){

    const [refresh , setRefresh] = useState(false)

    let sous_category = ""
    const [sousItem , setSousItem] = useState([])
    const [select , setSelect] = useState(null)

    let get_Item_Category = eventKey=>{
        console.log("1")
        console.log(eventKey)
        setSelect(eventKey)
        
        Axios.post("http://localhost:8000/get_sous_category",{
            sous_category : eventKey
        }).then((res)=>{
            console.log(res.data)
            setSousItem(res.data)
            setRefresh(true)
        })
        // eventKey = null
    }

    // const setItem = ()=>{
    //     if(sousItem.length >0){
    //         return(
    //             <Data data={sousItem} />
    //         )
    //     }
    // }

    return (
        <>
        <div className='navbar navbar-expand-lg shadow bg-light rounded position-sticky'>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/app"><i class="bi bi-house-door" style={{marginTop : "-5px"}}></i> Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/app/Favourite'><i class="bi bi-heart" style={{marginTop : "-2px"}}></i> Favourites</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/app/Panier'><i class="bi bi-cart" style={{marginTop : "-2px"}}></i> Panier</Link>
                    </li>
                    <li class="nav-item">
                        
                        <Dropdown onSelect={get_Item_Category}>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-headset"></i> Périphérique PC
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                               <Link to="/app/product_item/accesoires_perephiriques/clavier" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-1" eventKey="clavier">Clavier</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/haut_parleur" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="haut parleur">Haut Parleur</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/ecran" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="ecran">Ecran</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/hdd_externe" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="hdd externe">HDD Externe</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/casque" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-2" eventKey="casque">Casque</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/manette" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="manette">Manette</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/souris" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="souris">Souris</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/microphone" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="microphone">Microphone</Dropdown.Item></Link>
                               <Link to="/app/product_item/accesoires_perephiriques/usb" style={{textDecoration : "none"}}><Dropdown.Item href="#/action-3" eventKey="usb">USB</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </li>
                    <li class="nav-item">
                        <Dropdown onSelect={get_Item_Category}>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-cpu"></i> Composants Pc
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                
                                <Link to="/app/product_item/composant pc/alimentation" style={{textDecoration : "none"}}> <Dropdown.Item eventKey="alimentation" value="alimentation" href="#/action-1">Alimentation</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/carte graphique" style={{textDecoration : "none"}}><Dropdown.Item eventKey="carte graphique" value="carte graphique"  href="#/action-1">Carte Graphique</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/boite" style={{textDecoration : "none"}}> <Dropdown.Item eventKey="boite" value="boite" href="#/action-1">Boite</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/carte mere" style={{textDecoration : "none"}}><Dropdown.Item eventKey="carte mere" value="carte mere" href="#/action-1">Carte Mere</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/cpu" style={{textDecoration : "none"}}><Dropdown.Item eventKey="cpu" value="cpu" href="#/action-1">CPU</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/hdd" style={{textDecoration : "none"}}><Dropdown.Item eventKey="hdd" value="hdd" href="#/action-1">HDD</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/ram" style={{textDecoration : "none"}}><Dropdown.Item eventKey="ram" value="ram" href="#/action-1">RAM</Dropdown.Item></Link>
                                <Link to="/app/product_item/composant pc/ssd" style={{textDecoration : "none"}}><Dropdown.Item eventKey="ssd"  value="ssd"  href="#/action-1-8">SSD</Dropdown.Item></Link>
                                
                            </Dropdown.Menu> 
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown onSelect={get_Item_Category}>
                        
                            <Dropdown.Toggle variant='light' id="dropdown-navbar" eventKey="pc portable" >
                            
                            <i class="bi bi-laptop" ></i>  Laptops 
                            
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/app/product_item/Laptops/pc portable" style={{textDecoration : "none"}}><Dropdown.Item eventKey="pc portable" href="#/action-1">Pc Portable</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown onSelect={get_Item_Category}>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                <i class="bi bi-display"></i> Connectique
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Link to="/app/product_item/connectique/displayport" style={{textDecoration : "none"}}><Dropdown.Item value="displayport" eventKey="displayport" href="action-2">Displayport</Dropdown.Item></Link>
                            <Link to="/app/product_item/connectique/hdmi" style={{textDecoration : "none"}}><Dropdown.Item value="hdmi" eventKey="hdmi" href="action-2">HDMI</Dropdown.Item></Link>
                            <Link to="/app/product_item/connectique/vga" style={{textDecoration : "none"}}><Dropdown.Item value="vga" eventKey="vga" href="action-2">VGA</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li class="nav-item">
                        <Dropdown onSelect={get_Item_Category}>
                            <Dropdown.Toggle variant='light' id="dropdown-navbar">
                                 Autre
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/app/product_item/autre/chaise gaming" style={{textDecoration : "none"}}><Dropdown.Item value="chaise gaming" eventKey="chaise gaming" href="#/action-1">Chaise Gaming</Dropdown.Item></Link>
                                <Link to="/app/product_item/autre/tapis" style={{textDecoration : "none"}}><Dropdown.Item value="tapis" eventKey="tapis" href="#/action-2">Tapis</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
            
        </div>
        {/* {setItem()} */}
        </>
    );
}
export default NavBarCategory;