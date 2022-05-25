import './Comment.css'

export default function Comment(){
    return (
        <div>
            <h1 className='ml-9' style={{"margin-left" : "20rem"}}>Reviews</h1>
            <section >
                    <div class="container my-5 py-5">
                        <div class="row d-flex justify-content-center">
                        <div class="col-md-12 col-lg-10 col-xl-8">
                            <div class="card-comment">
                            <div class="card-body">
                                <div class="d-flex flex-start align-items-center">
                                <img class="rounded-circle shadow-1-strong me-3"
                                    src="https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="avatar" width="60"
                                    height="60" />
                                <div>
                                    <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                                    <p class="text-muted small mb-0">
                                    Shared publicly - Jan 2020
                                    </p>
                                </div>
                                </div>

                                <p class="mt-3 mb-4 pb-2">
                                Good Product
                                </p>
                            </div>
                            <div class="card-footer py-3 border-0 text-area-comment" >
                                <div class="d-flex flex-start w-100">
                                <img class="rounded-circle shadow-1-strong me-3"
                                    src="https://i.pinimg.com/564x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="avatar" width="40"
                                    height="40" />
                                <div class="form-outline w-100">
                                    <textarea class="form-control bg-light" id="textAreaExample" rows="4"></textarea>
                                    <label class="form-label" for="textAreaExample">Message</label>
                                </div>
                                </div>
                                <div class="float-end mt-2 pt-1">
                                <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                                <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

        </div>
    )
}