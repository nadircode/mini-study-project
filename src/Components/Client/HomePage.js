import './HomePage.css';
import NavBarClient from './NavBarClient';
import NavBarCategory from './NavBarCategory';
import Trends from './Trends';
import New from './New';
import Product from './Product';
import Footer from './Footer';
import Product_Details from './Product_Details';
import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link
} from "react-router-dom";
function HomePage(){
    return(
        <Router>
        <div className=''>
            <div className='position-sticky sticky-top'>
            <NavBarClient />
            <NavBarCategory />
            
            </div>
            <Routes>
                <Route exact path='Product' element={<Product_Details />} ></Route>
                <Route exact path='/' element={<Trends />} ></Route>  
                <Route exact path='accesoires_perephiriques' element={<Product/>} ></Route>  
            </Routes>
            
            
            
            
            
            <Footer />
            
            

        </div>
        </Router>
    );
}

export default HomePage ;