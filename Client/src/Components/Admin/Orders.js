import { useState , useEffect } from 'react';
import './Orders.css';
import Axios from 'axios';


function Orders(){

    const [ordersItem , setOrdersItem] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        let isMounted = true 
        Axios.get("http://localhost:8000/get_commande").then((response)=>{
            console.log(response) 
            console.log(response.data)
            if(isMounted){
                setLoading(true)
                setOrdersItem(response.data)
            }
            
        })
        return ()=>{
            isMounted = false ;
        };
    },[])
    return (
        <div className="orders-main">
            <h1>Orders</h1>
            <ul className="nav nav-tabs mb-5 mt-5" id="myTab0" role="tablist">
                <li class="nav-item" role="presentation" >
                
                <button
                className="nav-link active fw-bold btn"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                > All Orders <span class="badge badge-dark rounded-pill d-inline bg-dark">325</span>
                </button>
                </li>
                <li class="nav-item" role="presentation" >
                
                <button
                class="nav-link active fw-bold btn"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                > Completed <span class="badge badge-success rounded-pill d-inline bg-success">100</span>
                </button>
                </li>
                <li class="nav-item" role="presentation" >
                
                <button
                class="nav-link active fw-bold btn"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                > Canceled <span class="badge badge-danger rounded-pill d-inline bg-danger">20</span>
                </button>
                </li>
            </ul>
            <div className='table-orders'>
                <div className='table-orders'>
                    <table className='table align-middle mb-0 bg-white'>
                    <thead class="bg-light">
                        <tr>
                            <th>Orders ID</th>
                            <th>Client</th>
                            <th>Produit</th>
                            <th>Delivery Date</th>
                            <th>Prix</th>
                            <th>Status</th>
                            <th>Payement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>336987</td>
                            <td>Nadir</td>
                            <td>Pc gaming</td>
                            <td>10/04/2022</td>
                            <td>100 000 DA</td>
                            <td>
                            <span class="badge badge-success rounded-pill d-inline bg-success">Complete</span>
                            </td>
                            <td>Cash</td>
                            
                        </tr>
                        {ordersItem.map((p)=>(
                            <tr key={p.idCommande}>
                                <td>{p.idCommande}</td>
                                <td>{p.fullname_Client}</td>
                                <td>{p.nom_article}</td>
                                <td>{p.date_delivery}</td>
                                <td>{p.prix} DA</td>
                                <td>{p.status}</td>
                                <td>Cash</td>

                            </tr>
                        ))}
                        
                        
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders ;