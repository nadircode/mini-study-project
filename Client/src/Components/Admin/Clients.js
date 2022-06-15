import { useState , useEffect } from 'react';
import './Clients.css' ;
import Axios from 'axios';

function Clients (){

    const [client , setClient] = useState([])
    const [loading , setLoading] = useState(false)
    const [refresh , setRefresh] = useState(false)
    const [test , setTest] = useState([])

    useEffect(()=>{
        let isMounted = true 
        Axios.get("http://localhost:8000/get_client").then((response)=>{
            console.log("Data for Useeffect")
            console.log(response.data)
            setTest(response.data)
            if(isMounted){
            if(test.length > 0){
                setClient(response.data)
                setLoading(true)
            }
            setRefresh(true)

            }
        })
    },[refresh]);

   
    return (
        <div className="client-main">
            <h1>User</h1>
            
            <div class="input-group rounded w-25 my-4">
                <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="bi bi-search"></i>
                </span>
            </div>
            <div className='container pt-2'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card .card-main-clients'>
                            <div className='table-responsive'>
                                <table className='table no-wrap user-table mb-0'>
                                <thead>
                                    <tr>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Le Nom Complet</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Addresse Email</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">date inscription</th>
                                    
                                    <th scope="col" class="border-0 text-uppercase font-medium text-danger pl-4">Danger</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {client.map((p)=>(
                                        <tr key={p.idClient}>
                                            <td>{p.idClient}</td>
                                            <td>{p.fullname_Client}</td>
                                            <td>{p.email_Client}</td>
                                            <td>{p.date_inscription}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="bi bi-trash"></i> </button>
                                            </td>
                                            
                                        </tr>
                                    )
                                    )}
                                    
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Clients ;