
import { Link } from 'react-router-dom';


export default function Hero(){
   
        return (
           
             <section class="hero-section overflow-hidden position-relative z-0 mb-4 mb-lg-0" id="home">
            <div class="hero-background">
              <div class="container">
                <div class="row gy-4 gy-md-8 pt-9 pt-lg-0">
                  <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="fs-2 fs-lg-1 text-white fw-bold mb-2 mb-lg-x1 lh-base mt-3 mt-lg-0"> Warmth of Kashmir, Powered by Innovation: ElectricHamam.com <span class="text-nowrap"></span></h1>
                    <p class="fs-8 text-white mb-3 mb-lg-4 lh-lg">Your Trusted Partner for Electric Underfloor Heating Systems</p>
                    <div class="d-flex justify-content-center justify-content-lg-start">
                        <Link class="btn btn-primary btn-lg lh-xl mb-4 mb-md-5 mb-lg-7" to="/shop">Explore Our Products</Link>
                        </div>
                    <p class="mb-x1 fs-10 button-text text-uppercase fw-bold lh-base text-300">We Know What You Are Thinking?</p>
                    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 position-relative z-2">
                        <Link class="blockquote btn-lg lh-xl mb-4 mb-md-5 mb-lg-7" to="/why-electric-hamam"> 
                    {/* <img class="img-fluid" src={process.env.PUBLIC_URL + "/images/logos/App_Store.webp"} alt="logos/App_Store.webp" /> */}
                            
                            {/* <span className="typing-animation" style={{textTransform:'lowercase',fontStyle:'italic'}}>why not AC or Radiator or Room Heater</span> */}
                    </Link>
                   </div>
                  </div>
                  <div class="col-lg-6 position-lg-relative">
                    <div class="position-lg-absolute z-1 text-center">
                        <img class="img-fluid chat-image" src={process.env.PUBLIC_URL + "/images/Hero/Frame.webp"} alt="" />
                        {/* <img class="img-fluid chat-image" src={process.env.PUBLIC_URL + "/images/electricHamamFeatured-1.png"} alt="" /> */}
                      <div class="position-absolute dots d-none d-md-block">
                         <img class="img-fluid w-50 w-lg-75" src={process.env.PUBLIC_URL + "/images/illustrations/Dots.webp"} alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-absolute bottom-0 start-0 end-0 z-1"><img class="wave mb-md-n2" src={process.env.PUBLIC_URL + "/images/illustrations/Wave.svg"} alt="" />
              <div class="bg-white py-2 py-md-5"></div>
            </div>
          </section>
           
        );
}