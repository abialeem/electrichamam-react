import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <>
        <footer class="pt-7 pt-lg-8">
          <div class="container">
            <div class="row gy-4 g-md-3 border-bottom pb-8 pb-lg-9 justify-content-center">
              <div class="col-6 col-md-3">
                <p class="mb-2 lh-lg ls-1">Company</p>
                <ul class="list-unstyled text-1100">
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#about">About us</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#contact"> Contact us</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!">Careers</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!">Press</Link></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <p class="mb-2 lh-lg">Product</p>
                <ul class="list-unstyled text-1100">
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!">Features</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!"> Pricing</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!"> News</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!"> Help desk</Link></li>
                  <li class="mb-1"><Link class="ls-1 lh-xl" to="#!"> Support</Link></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <p class="mb-2 lh-lg"> Legal</p>
                <ul class="list-unstyled text-1100">
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!">Privacy</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!"> Terms & Conditions</Link></li>
                  <li class="mb-1"> <Link class="ls-1 lh-xl" to="#!"> Return Policy</Link></li>
                </ul>
              </div>
              <div class="col-6 col-md-3 d-md-flex flex-column align-items-md-end pe-md-0">
                <div>
                  <p class="mb-2 lh-lg"> Download Our App</p>
                  <div class="mb-1 mb-lg-2">
                     <Link class="border-0 p-0 bg-transparent cursor-pointer rounded-1" to="#!">
                     <img class="img-fluid" src={process.env.PUBLIC_URL + "/images/logos/App_Store.webp"} alt="assets/img/logos/App_Store.webp" />
                     </Link>
                     </div>
                     <Link class="border-0 p-0 bg-transparent cursor-pointer rounded-1" to="#!">
                       <img class="img-fluid" src={process.env.PUBLIC_URL + "/images/logos/Play_Store.webp"} alt="assets/img/logos/Play_Store.webp" />
                     </Link>
                </div>
              </div>
            </div>
            <div class="row gy-2 py-3 justify-content-center justify-content-md-between">
              <div class="col-auto ps-0">
                <p class="text-center text-md-start lh-xl text-1100"> © 2024 Copyright, All Right Reserved, Made by <Link class="fw-semi-bold" to="https://electrichamam.com/dev-team/">ElectricHamam Dev Team </Link>❤️</p>
              </div>
              <div class="col-auto pe-0"><Link class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" to="#!"><span class="uil uil-twitter"> </span></Link><Link class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" to="#!"><span class="uil uil-instagram"></span></Link><Link class="icons fs-8 me-3 me-md-0 ms-md-3 cursor-pointer" to="#!"><span class="uil uil-linkedin"> </span></Link></div>
            </div>
          </div>
        </footer>
        </>
    );
}