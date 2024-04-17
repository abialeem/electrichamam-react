import { Link } from 'react-router-dom';
import logo from '../logo.svg';


export default function Navbar(){
    return (
        <>
        <nav class="navbar navbar-expand-md fixed-top" id="navbar" data-navbar-soft-on-scroll="data-navbar-soft-on-scroll">
          <div class="container-fluid px-0">
            <Link to="/">
            <img class="navbar-brand w-75 d-md-none" src={logo} alt="logo" />
            </Link>
            <Link class="navbar-brand fw-bold d-none d-md-block" to="/">Electric Hamam</Link>
            <Link class="btn btn-primary btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto" to="#">Get A Free Quote</Link>
            <button class="navbar-toggler border-0 pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-end" id="navbar-content" data-navbar-collapse="data-navbar-collapse">
              <ul class="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0" data-navbar-nav="data-navbar-nav">
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/">Home</Link></li>
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/why-electric-hamam">Why Electric Hamam</Link></li>
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/why-us">Why Us</Link></li>
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/shop">Shop Now</Link></li>
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/our-company">Our Company</Link></li>
                <li class="nav-item"> <Link class="nav-link lh-xl" to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </nav>
       

        </>
    );
}