import './App.css';
import SideBar  from './Components/SideBar';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Admin/DashBoard';
import Clients from './Components/Admin/Clients';
import Product from './Components/Admin/Product';
import Orders from './Components/Admin/Orders';
import HomePage from './Components/Client/HomePage';
import Admin from './Components/Admin/Admin';
import MyOrders from '../src/Components/Client/MyOrders';
import {
  BrowserRouter as Router , 
Routes,
Route,
Link
}from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route exact path='admin/*' element={<Admin />} ></Route> 
        
      </Routes>
      <Routes>
          <Route exact path='app/*' element={<HomePage />} ></Route>
      </Routes>
      <Routes>
          <Route exact path='/' element={<HomePage />} ></Route>
      </Routes>
      <Routes>
          <Route exact path='/mes_commandes' element={<MyOrders />} ></Route>
      </Routes>

    </Router>
    
    </>
    
  );
}

export default App;
