import './Filter.css'
import Product_Item from './Product_Item'
export default function Filter(){
    return (
        <div class="content py-md-0 py-3 mx-2 filter-main d-flex flex-row">
        <section id="sidebar">
            <div class="pt-1">
                <h5 class="font-weight-bold">Featured Brands</h5>
                <form class="brand">
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">HP<input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">SanDisk <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Apple <input type="checkbox" checked /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">LogiTech <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-1"> <label class="tick">Known <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Rating</h5>
                <form class="rating">
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"><span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick"> <span class="fas fa-star"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <span class="far fa-star px-1 text-muted"></span> <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Availibaility</h5>
                <form class="rating">
                    <div class="form-inline d-flex align-items-center py-2"> <label class="tick">In Stock <input type="checkbox" /> <span class="check"></span> </label> </div>
                </form>
            </div>
            <div class="pt-1">
                <h5 class="font-weight-bold">Price</h5>
                <form class="price">
                    <div className='d-flex flex-row'>
                        <input type='number' placeholder='min' step='5' />
                        <input type='number' placeholder='max' step='5' />
                    </div>
                </form>
            </div>
            <div class="pt-2">
                <form class="apply">
                    <div className='d-flex flex-row float-end'>
                        <button className='btn btn-primary'>
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <Product_Item />
        
        </div>
    )
}