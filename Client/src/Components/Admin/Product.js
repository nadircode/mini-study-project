import './Product.css';
import {useRef, useState , useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {Button , Form, Modal} from 'react-bootstrap';
import Axios from 'axios';
function Product (){
    const [productDetails , setProductDetails] = useState([])
    const [imgurl , setImgurl] = useState('')
    const [loading , setLoading] = useState(false)
    
    useEffect(()=>{
        Axios.get("http://localhost:8000/get_article").then((response)=>{
            console.log("Data for Useeffect")
            console.log(response.data)
            setLoading(true)
            setProductDetails(response.data)
            console.log(productDetails)
            console.log(productDetails.imgone)
        })
    },[]);
    
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

    const [productList , setProductList] = useState([])
    

    /* Product Variables */
    const [IDarticle , setIDarticle] = useState(1)
    const [prix , setPrix] = useState()
    const [nom_article , setNom_article] = useState()
    const [description , setDescription] = useState()
    const [nbr_etoile , setNbr_etoile] = useState(0)
    const [nombre_enstock , setNombre_enstock] = useState()
    const [etat_article , setEtat_article] = useState()
    const [imageOne , setImageOne] = useState({
        file : [] , 
        filepreview : null
    })
    

    const [option , setOption] = useState(0);

    const getOption = (value)=>{
        if(value == 0){
            <Form.Select>
                <option> Disabled</option>
            </Form.Select>
        }
        else if(value == 1){
            return(
                <Form.Select aria-label="Default select example" className="mt-3">
                            <option>Sous Categorie</option>
                                <option value="1">Alimentaion</option>
                                <option value="2">Boite</option>
                                <option value="3" >Carte Graphique</option>
                                <option value="4">Carte Mere</option>
                                <option value="5">CPU</option>
                                <option value="6">HDD</option>
                                <option value="7">RAM</option>
                                <option value="8">SSD</option>
                    </Form.Select>
            )
        }
        else if(value == 2){
            return (
                <Form.Select aria-label="Default select example" className="mt-3" >
                            <option>Sous Categories</option>
                                <option value="1">Displayport</option>
                                <option value="2">HDMI</option>
                                <option value="3" >VGA</option>
                </Form.Select>
            )
        }
        else if(value == 4){
            return (

                <Form.Select aria-label="Default select example" className="mt-3">
                            <option>Sous Categoroes</option>
                                <option value="1">Casque</option>
                                <option value="2">Clavier</option>
                                <option value="3" >Ecran</option>
                                <option value="4">Haut Parleur</option>
                                <option value="5">HDD Externe</option>
                                <option value="6">Manette</option>
                                <option value="7">Microphone</option>
                                <option value="8">Souris</option>
                                <option value="9">USB</option>
                </Form.Select>
                
            )
        }
        else if(value == 5){
            return (
                <Form.Select aria-label="Default select example" className="mt-3">
                            <option>Sous Categoroes</option>
                            <option value="1">Chaise Gaming</option>
                            <option value="2">Tapis</option>
                </Form.Select>
            )
        }
            
    }
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status , setStatus] = useState('')
      const saveFile = async(e)=>{
        e.preventDefault();
        setImageOne({...imageOne ,
             file : e.target.files[0] , 
             filepreview:URL.createObjectURL(e.target.files[0])
            }
           
        )
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          }
          setImage(img)

        
    }
    const {register , handleSubmit} = useForm();
    const postData = (data) =>{
        // console.log("Data : " + data);
        const formData = new FormData();
        formData.append("file", image.data);
        // formData.append("fileName", fileName);
        // console.log(formData);
        Axios.post("http://localhost:8000/create_article",{
            IDarticle  : IDarticle , 
            prix : prix ,
            nom_article : nom_article ,
            description : description ,
            nombre_enstock : nombre_enstock ,
            etat_article : etat_article ,
            
        })
        .then(()=>{
            setProductList([{
                IDarticle  : 11111 , 
                prix : prix ,
                nom_article : nom_article ,
                description : description ,
                nbr_etoile : 0 ,
                nombre_enstock : nombre_enstock ,
                etat_article : etat_article ,
                imageOne : imageOne.filepreview
            }])
        })
        console.log("Form Data : " + formData)
        console.log("Image 2 : " + image)
        console.log(productList)
        setShow3(false);
        setCongrat(true);
    }

    
    const productItems = ()=>{
        if(loading == true){
        if(productDetails != null){
            return (
                
                productDetails.map((p)=>(
                    <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" key={p.IDarticle} >
                            <div className='media d-block d-sm-flex text-center text-sm-left'>
                                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img  alt="Product" src={require(`../Images/categorie/${p.imgone}.jpg`)}  /> </a>
                                <div class="media-body pt-3">
                                    <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">{p.nom_article}</a></h3>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Categorie:</span>{p.category}</div>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Sous Categorie:</span>{p.sous_category}</div>
                                    <div class="font-size-lg text-primary pt-2">{p.prix} DA</div>
                                </div>
                            </div>
                            <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                                <div class="form-group mb-2">
                                    <label for="quantity1" >Quantity</label>
                                    <input class="form-control form-control-sm" type="number" id="quantity1" value={p.nombre_enstock} disabled='true'/>
                                </div>
                                
                                <button className="btn btn-outline-secondary btn-sm btn-block mb-2 d-block" type="button">
                                <i class="bi bi-pencil-fill"></i> Modifier
                                </button>
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2 d-block" type="button">
                                    <i className='bi bi-trash'></i> Supprimer
                                </button>
                                
                            </div>
                        </div>
                ))
                
               
            )
        }
        
    }
        else if(loading == false) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return(
                <div>Connect To Server To Fetch Data from database</div>
            )
        }
    }

    return(
        <>
        <div className="product-main mr-2 ml-2">
            <div className='flex-row d-flex justify-content-around'>
            <h1 >Produits</h1> 
            <Button variant="primary" onClick={handleShow} >
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
                            <Form.Control type='text' placeholder='Nom du Produit' onChange={(e)=>{setNom_article(e.target.value)}} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type='number' placeholder='Prix en DA' onChange={(e)=>{setPrix(e.target.value)}} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='number' placeholder='Stock' onChange={(e)=>{setNombre_enstock(e.target.value)}} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className="mt-3" onSelect={option} onChange={(e)=>setOption(e.target.value)}>
                            <option>Category</option>
                            <option value="1" >Composant Pc</option>
                            <option value="2" >Connectique</option>
                            <option value="3"  >PC</option>
                            <option value="4" >Périphérique PC</option>
                            <option value="5" >Autre</option>
                        </Form.Select>
                        {getOption(option)}
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
                        <Form.Select onSelect={etat_article} onChange={(e)=>{setEtat_article(e.target.value)}}>
                            <option>choissez un etat de l'article</option>
                            <option value="tendance">Tendance</option>
                            <option value="Nouveau">Nouveauté</option>
                            <option value="autre">Autre</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={9} onChange={(e)=>{setDescription(e.target.value)}}/>
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
                    <Form onSubmit={handleSubmit(postData)}>
                       <Form.Group>
                           <Form.Label className='fw-bold'>Sélectionner une Image</Form.Label>
                            <Form.Control type='file' name='image' {...register('value_name')} onChange={(e)=>{saveFile(e)}} />  
                        </Form.Group>    
                        {imageOne.filepreview !=null 
                            ? <img src={imageOne.filepreview} alt="Upload Image" />
                            : null
                        }                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose3}>
                    Annuler
                </Button>
                <Button variant="primary" onClick={postData}>
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
                        <div class="card-img"> <img class="img-fluid" src={imageOne.filepreview} /> </div>
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
                        {/* Item */}
                        {productItems()}
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
}

export default Product ;