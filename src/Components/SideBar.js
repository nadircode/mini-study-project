import React, { useState } from "react";
import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../Components/SideBar.css';
import Dashboard from '../Components/Admin/DashBoard';
import Clients from '../Components/Admin/Clients';
import Product from '../Components/Admin/Product';
import Orders from '../Components/Admin/Orders';
// import Blocked from '../Components/Admin/';



const routes = [
    {
        path :"/Dashboard",
        exact: true,
        main: () => <Dashboard />
    }
];

function SideBar(){
    const [isActive , setIsActive] = useState(false);

const handleToggle = ()=>{
    setIsActive(!isActive);
}
    return(
        <Router>
        <div >
            <nav id="side-bar-menu"
                className='collapse d-lg-block sidebar collapse bg-white'
            >
                <div className='position-sticky'>
                    <div className='list-group list-group-flush mt-4 mx-3 lists'>
                                <Link to="/Dashboard" className="list-group-item list-group-item-action  py-2 ripple" onClick={handleToggle} >
                                <i class="bi bi-speedometer me-3"></i><span>Dashboard</span>
                                </Link>

                                <Link to="/Clients" className='list-group-item list-group-item-action py-2 ripple'>
                                <i class="bi bi-people me-3"></i><span>Clients</span>
                                </Link>

                                <Link to="/Product" className='list-group-item list-group-item-action py-2 ripple'>
                                <i class="bi bi-bag me-3"></i><span>Produits</span>
                                </Link>

                                <Link to="/Orders" className='list-group-item list-group-item-action py-2 ripple'>
                                <i class="bi bi-list-ul me-3"></i><span>Orders</span>
                                </Link>

                                {/* <Link to="/Blocked" className='list-group-item list-group-item-action py-2 ripple'>
                                <i class="bi bi-slash-circle me-3"></i><span>Blocked</span>
                                </Link> */}
                    </div>
                    
                    
                </div>
            </nav>
            <Routes>
                <Route path="Dashboard" element={<Dashboard />}></Route>
                <Route path="Clients" element={<Clients />}></Route>
                <Route path="Product" element={<Product />}></Route>
                <Route path="Orders" element={<Orders />}></Route>
                {/* <Route path="Blocked" element={<Blocked />}></Route> */}
            </Routes>
            
        </div>
        </Router>
        
    );
}

export default SideBar;