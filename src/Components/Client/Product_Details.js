import './Product_Details.css'
import Comment from './Comment'
export default function Product_Details(){
    return (
        <>
        <div class="container my-5">
		<div class="card-details-product">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></div>
						  <div class="tab-pane" id="pic-2"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></div>
						  <div class="tab-pane" id="pic-3"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></div>
						  <div class="tab-pane" id="pic-4"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></div>
						  <div class="tab-pane" id="pic-5"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="https://c1.neweggimages.com/ProductImageCompressAll300/19-117-320-01.jpg" /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">Intel Core i7-11700KF</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">11th Gen Intel Core i7-11700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3.0 and PCIe Gen 4.0</p>
						<h4 class="price">current price: <span className='text-danger'>10500 Da</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">Ajouter au Panier</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
                        <div className='btn-commander mt-2'>
                            <button type='button' className='btn btn-lg btn-danger'>Commander</button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <Comment />
    </>
    )
}