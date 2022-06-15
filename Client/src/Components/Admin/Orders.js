import { useState , useEffect } from 'react';
import './Orders.css';
import Axios from 'axios';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {useForm} from 'react-hook-form';
import {Button , Form, Modal , Dropdown} from 'react-bootstrap';







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

    let statusCommande = (st) =>{
        if(st == 'en cours'){
            return(
                <span class="badge badge-success rounded-pill d-inline bg-warning">{st}</span>
            )
        }
        else if(st == 'complete'){
            return(
                <span class="badge badge-success rounded-pill d-inline bg-success">{st}</span>
            )
        }
        else if(st == 'annulé'){
            return(
                <span class="badge badge-success rounded-pill d-inline bg-danger">{st}</span>
            )
        }
    } 
    const [pdf , setPDF] = useState(false)
    let print_facture = (p)=>{

            setshowFacture(true)


    }

    let confirm_commande = (p)=>{
        Axios.put("http://localhost:8000/set_status_confirm",{
            status : 'complete' ,
            idCommande : p.idCommande
        }).then((response)=>{
            window.open("http://localhost:3000/admin/Orders", "_self");
        }
        )
    }

    const [showFacture , setshowFacture] = useState(false)

    let closeFacture = ()=>{setshowFacture(false)}
    return (
        <div className="orders-main">
            

           <h1>Orders</h1>
            
            <div className='table-orders'>
                <div className='table-orders'>
                    <table className='table align-middle mb-0 bg-white'>
                    <thead class="bg-light">
                        <tr>

                            <th>Commande ID</th>
                            <th>Client</th>
                            <th>Numéro de télephone</th>
                            <th>wilaya</th>
                            <th>Ville</th>
                            <th>Addresse</th>
                            <th>Produit</th>
                            <th>Date d'achat</th>
                            <th>Prix</th>
                            <th>Status</th>
                            <th>Autre</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {ordersItem.map((p)=>(
                            <tr key={p.idCommande}>
                                <td>{p.idCommande}</td>
                                <td>{p.fullname_Client}</td>
                                <td>{p.numero_tel}</td>
                                <td>{p.wilaya}</td>
                                <td>{p.ville}</td>
                                <td>{p.addresse}</td>
                                <td>{p.nom_article}</td>
                                <td>{p.date_achat}</td>
                                <td>{p.prix} DA</td>
                                <td>{statusCommande(p.status)}</td>
                                <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="WHITE" id="dropdown-basic" className='btn-dropdown'>
                                        
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    
                                        <Dropdown.Item onClick={()=>{print_facture(p)}}>Imprimer La Facture</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>{confirm_commande(p)}}>Valider la Commande</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>    

                                </td>
                                
                                <Modal show={showFacture} onHide={closeFacture}>
                <Modal.Header closeButton>
                <Modal.Title>
                    La facture
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Form>
                        <Form.Group>
                            <Form.Label>ID commande</Form.Label><Form.Label>{p.idCommande}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nom du Client</Form.Label><Form.Label>{p.fullname_Client}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nom du Produit</Form.Label><Form.Label>{p.nom_article}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prix</Form.Label><Form.Label>{p.prix}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantite</Form.Label>  <Form.Label>{p.nombre_besoin}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date d'achat</Form.Label>  <Form.Label>{p.date_achat}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date de livraison</Form.Label>  <Form.Label>{p.date_delivery}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Numéro de telephone</Form.Label>  <Form.Label>{p.numero_tel}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wilaya</Form.Label>  <Form.Label>{p.wilaya}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Addresse</Form.Label>  <Form.Label>{p.addresse}</Form.Label> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ville</Form.Label>  <Form.Label>{p.ville}</Form.Label> 
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>

                </Modal>
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