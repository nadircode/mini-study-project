import './Product.css'
import Filter from './Filter';
import Product_Item from './Product_Item';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
function Product(){

    const {category} = useParams();
    const {sous_category} = useParams();
    return(
        <div className='d-flex flex-row'>
        <Filter />
        </div>
    )
}
export default Product;