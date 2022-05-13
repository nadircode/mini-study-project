import './Footer.css'
function Footer(){
    return(
        <div className="footer">
        <footer class="text-center text-lg-start bg-light text-muted">
          
          <section
            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
            
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
           
        
            
            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
            
          </section>
         
          <section class="">
            <div class="container text-center text-md-start mt-5">
              
              <div class="row mt-3">
                
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>TechBro
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
               
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold mb-4">
                    Langages Utilisées
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Html</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">CSS</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">React JS</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Node JS</a>
                  </p>
                </div>
                
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Help</a>
                  </p>
                </div>
                
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  
                  <h6 class="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i class="fas fa-home me-3"></i> Tlemcen , Algeria </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    mini_projet_tlemcen2022@example.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 213 6 66 66 66 66</p>
                  <p><i class="fas fa-print me-3"></i> + 213 6 66 66 66 66</p>
                </div>
                
              </div>
              
            </div>
          </section>
          
          <div class="text-center p-4">
            © 2022 Copyright:
            <a class="text-reset fw-bold" href="#">TechBro-MiniProjet-Mesmoudi-Groupe.com</a>
          </div>
          
        </footer>
        
        </div>
    );
}
export default Footer;