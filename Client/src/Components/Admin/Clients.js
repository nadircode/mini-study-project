import './Clients.css' ;

function Clients (){
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
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Nom</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Prenom</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Addresse Email</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Verified</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">Status</th>
                                    <th scope="col" class="border-0 text-uppercase font-medium text-danger pl-4">Danger</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="pl-4">1</td>
                                        <td>
                                            <h5 class="font-medium mb-0">Khouani</h5>
                                            
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Youcef</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">youcef@gmail.com</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Yes</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0"><span class="badge badge-success rounded-pill d-inline bg-success">Active</span></h5>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="bi bi-trash"></i> </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td class="pl-4">2</td>
                                        <td>
                                            <h5 class="font-medium mb-0">Houmani</h5>
                                            
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Abdessamed</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">samad@gmail.com</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Yes</h5>
                                        </td>
                                        <td>
                                        <h5 class="font-medium mb-0"><span class="badge badge-success rounded-pill d-inline bg-success">Active</span></h5>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="bi bi-trash"></i> </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td class="pl-4">3</td>
                                        <td>
                                            <h5 class="font-medium mb-0">Khoris</h5>
                                            
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Walid</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">walid@gmail.com</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Yes</h5>
                                        </td>
                                        <td>
                                        <h5 class="font-medium mb-0"><span class="badge badge-success rounded-pill d-inline bg-success">Active</span></h5>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="bi bi-trash"></i> </button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td class="pl-4">4</td>
                                        <td>
                                            <h5 class="font-medium mb-0">Mesmoudi</h5>
                                            
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Nadir</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">nadir@gmail.com</h5>
                                        </td>
                                        <td>
                                            <h5 class="font-medium mb-0">Yes</h5>
                                        </td>
                                        <td>
                                        <h5 class="font-medium mb-0"><span class="badge badge-danger rounded-pill d-inline bg-danger">Blocked</span></h5>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="bi bi-trash"></i> </button>
                                        </td>
                                    </tr>
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