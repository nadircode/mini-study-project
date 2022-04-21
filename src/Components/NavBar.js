
function NavBar(){
    return(
        <div>
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img
                            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                            height="25"
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item dropdown">
                        <a
                            class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <i className="bi bi-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <li><a className="dropdown-item" href="#">Some news</a></li>
                        <li><a className="dropdown-item" href="#">Another news</a></li>
                        <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                        </ul>
                        </li>

                        <li class="nav-item dropdown">
          <a
             class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <img
                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                 class="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>
          <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
              >
            <li><a class="dropdown-item" href="#">My profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;