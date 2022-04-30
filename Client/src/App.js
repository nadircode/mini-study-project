import './App.css';
import SideBar  from './Components/SideBar';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Admin/DashBoard';
import Clients from './Components/Admin/Clients';
import Product from './Components/Admin/Product';
import Orders from './Components/Admin/Orders';
import HomePage from './Components/Client/HomePage';

function App() {
  return (
    <>
    <NavBar />
    <SideBar />
    {/* <HomePage /> */}
    </>
  );
}

export default App;
