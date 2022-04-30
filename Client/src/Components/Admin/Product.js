import './Product.css';
import {useRef, useState} from 'react';
import {Button , Form, Modal} from 'react-bootstrap';
function Product (){
    
  const [show, setShow] = useState(false);
  const [show2 , setShow2] = useState(false);
  const [show3 , setShow3] = useState(false);
  const [congrat , setCongrat] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow(false);  
    setShow2(true);}
    const handleClose3 = () => setShow3(false);
  const handleShow3 = () => {
    setShow2(false);  
    setShow3(true);}

    const congratColose = ()=> setCongrat(false);
    const congratModal = () =>{
        setShow3(false);
        setCongrat(true);
    }
    

    return(
        <>
        <div className="product-main mr-2 ml-2">
            <div className='flex-row d-flex justify-content-around'>
            <h1 >Produits</h1> 
            <div class="input-group rounded w-25 h-10 mt-2">
                <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="bi bi-search"></i>
                </span>
            </div>
            <Button variant="success" onClick={handleShow}>
                <i className='bi bi-plus'></i>Ajouter Prdouit
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Ajouter Produit
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul id="progressbar-1" class="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                        <li class="step0 active" id="step1"></li>
                        <li class="step0 text-center" id="step2"></li>
                        <li class="step0 text-muted text-end" id="step3"></li>
                    </ul>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nom du Produit</Form.Label>
                            <Form.Control type='text' placeholder='Nom du Produit' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type='number' placeholder='Prix en DA' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='number' placeholder='Stock' />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className="mt-3">
                            <option>Category</option>
                            <option value="1">Phone</option>
                            <option value="2">Cpu</option>
                            <option value="3">Gpu</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={handleShow2}>
                    Suivant
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal 2 */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Ajouter Produit
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul id="progressbar-1" class="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                        <li class="step0 active" id="step1"></li>
                        <li class="step0 active text-center" id="step2"></li>
                        <li class="step0 text-muted text-end" id="step3"></li>
                    </ul>
                    <Form>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type='text' placeholder='Tags' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={9} />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose2}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={handleShow3}>
                    Suivant
                </Button>
                </Modal.Footer>
            </Modal>
            

            {/* Modal 3 */}
            

                <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Ajouter Produit
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul id="progressbar-1" class="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                        <li class="step0 active" id="step1"></li>
                        <li class="step0 active text-center" id="step2"></li>
                        <li class="step0 active text-muted text-end" id="step3"></li>
                    </ul>
                    <Form>
                       <Form.Group>
                           <Form.Label className='fw-bold'>Sélectionner une Image</Form.Label>
                            <Form.Control type='file' />  
                        </Form.Group>                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose3}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={congratModal}>
                    Suivant
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Congratulation Modal */}
            <Modal show={congrat} onHide={congratColose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="modal-dialog">
                    <div class="card-main">
                        <div class="card-img"> <img class="img-fluid" src="https://i.imgur.com/4niebFr.jpg" /> </div>
                        <div class="card-title">
                            <p>Success!</p>
                        </div>
                        <div class="card-text">
                            <p>vous avez ajouter votre Produit avec success</p>
                        </div> 
                    </div>
                </div>
            </Modal.Body>
            </Modal>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-9 col-md-8'>
                        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                            <div className='media d-block d-sm-flex text-center text-sm-left'>
                                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src="https://cdn1.batolis.com/43789-large_default/smartphone-condor-plume-l8-pro-63-3go-32go-noir.jpg" alt="Product" /></a>
                                <div class="media-body pt-3">
                                    <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">Smartphone condor plume l8 pro 6,3" - 3go - 32go - noir</a></h3>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Categorie:</span>Télephone</div>
                                    <div class="font-size-lg text-primary pt-2">30 500 DA</div>
                                </div>
                            </div>
                            <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                                <div class="form-group mb-2">
                                    <label for="quantity1">Quantity</label>
                                    <input class="form-control form-control-sm" type="number" id="quantity1" value="1" />
                                </div>
                                
                                <button className="btn btn-outline-secondary btn-sm btn-block mb-2 d-block" type="button">
                                <i class="bi bi-pencil-fill"></i> Modifier
                                </button>
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2 d-block" type="button">
                                    <i className='bi bi-trash'></i> Supprimer
                                </button>
                                
                            </div>
                        </div>
                        {/* Item */}
                        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                            <div className='media d-block d-sm-flex text-center text-sm-left'>
                                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src="https://cdn1.batolis.com/43789-large_default/smartphone-condor-plume-l8-pro-63-3go-32go-noir.jpg" alt="Product" /></a>
                                <div class="media-body pt-3">
                                    <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">Smartphone condor plume l8 pro 6,3" - 3go - 32go - noir</a></h3>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Categorie:</span>Télephone</div>
                                    <div class="font-size-lg text-primary pt-2">30 500 DA</div>
                                </div>
                            </div>
                            <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                                <div class="form-group mb-2">
                                    <label for="quantity1">Quantity</label>
                                    <input class="form-control form-control-sm" type="number" id="quantity1" value="1" />
                                </div>
                                
                                <button className="btn btn-outline-secondary btn-sm btn-block mb-2 d-block" type="button">
                                <i class="bi bi-pencil-fill"></i> Modifier
                                </button>
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2 d-block" type="button">
                                    <i className='bi bi-trash'></i> Supprimer
                                </button>
                                
                            </div>
                        </div>
                        {/* Item */}
                        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                            <div className='media d-block d-sm-flex text-center text-sm-left'>
                                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src="https://cdn1.batolis.com/43789-large_default/smartphone-condor-plume-l8-pro-63-3go-32go-noir.jpg" alt="Product" /></a>
                                <div class="media-body pt-3">
                                    <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">Smartphone condor plume l8 pro 6,3" - 3go - 32go - noir</a></h3>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Categorie:</span>Télephone</div>
                                    <div class="font-size-lg text-primary pt-2">30 500 DA</div>
                                </div>
                            </div>
                            <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                                <div class="form-group mb-2">
                                    <label for="quantity1">Quantity</label>
                                    <input class="form-control form-control-sm" type="number" id="quantity1" value="1" />
                                </div>
                                
                                <button className="btn btn-outline-secondary btn-sm btn-block mb-2 d-block" type="button">
                                <i class="bi bi-pencil-fill"></i> Modifier
                                </button>
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2 d-block" type="button">
                                    <i className='bi bi-trash'></i> Supprimer
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
}

export default Product ;