import './HomePage.css';
import NavBarClient from './NavBarClient';
import NavBarCategory from './NavBarCategory';
import Trends from './Trends';
import New from './New';
import Product from './Product';
import Footer from './Footer';
import Product_Details from './Product_Details';
import Favourite from './Favourite';
import ChartProduct from './ChartProduct';

import {
    BrowserRouter as Router , 
  Routes,
  Route,
  Link , 
  useNavigate
} from "react-router-dom";
import { useEffect } from 'react';
function HomePage(){

    let navigate = useNavigate();


    return(
        
        <div className=''>
            <div className='position-sticky sticky-top'>
            <NavBarClient />
            <NavBarCategory />
            
            </div>
            <Routes>
                <Route exact path='/Products/:category/:sous_category/:nom_article/:id' element={<Product_Details />} ></Route>
                <Route exact path='/' element={<Trends />} ></Route>  
                <Route exact path='/product_item/:category/:sous_category' element={<Product />} ></Route>  
                <Route exact path='/Favourite' element={<Favourite />}></Route>
                <Route exact path='/Panier' element={<ChartProduct />}></Route>
            </Routes>
            
            
            
            
            
            <Footer />
            
            

        </div>
        
    );
}

export default HomePage ;