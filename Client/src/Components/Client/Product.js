import './Product.css'
import Filter from './Filter';
import Product_Item from './Product_Item';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
function Product(){

    const {category} = useParams();
    const {sous_category} = useParams()
    useEffect(()=>{
        
        document.title =`${sous_category}`;
    },[sous_category])
    return(
        <div className='d-flex flex-row'>
            
        <Filter sous_category={sous_category} />
       
        </div>
    )
}
export default Product;