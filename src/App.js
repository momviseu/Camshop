import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PersonIcon from '@mui/icons-material/Person';




import './App.css';
// import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Card from "./Components/Cards/Card";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Product from "./Hooks/Product";
import Order from "./Components/Order/Order";


const App = () =>{
  return (
    <div class="main">
      
      
      <BrowserRouter>


      {/* @navbar---------- */}
      <nav class="navbar navbar-expand-md  bg-light">

        {/* @container----------- */}
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><DehazeSharpIcon/></span>               
          </button>
          
          {/* @logo-------- */}
            <a class="navbar-brand  mt-2 mt-lg-0" href="#">
              <img class="nav-link"
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          <div  class="collapse  navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav   me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"><Link to="home">Home</Link></a>
              </li>
            
              <li>
                <a class="nav-link"  href="#"><Link to="shop">Shop</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="about">About Us</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="blog">Blog</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="contact">Contact Us</Link></a>
              </li>
            </ul>
          </div>

          

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a class="text-reset me-3 user-login" href="#">
              <Link class="user" to=""><i><PersonIcon/></i>
              <p class="user-title">Account</p>
              </Link>
            </a>
            <a class="text-reset me-3 ShoppingCartIcon" href="#">
              <Link to="order">
                <ShoppingCartIcon/>
                <span class="icon-order">0</span>
              </Link>
            </a>
            <a class="text-reset me-3" href="#">
              <Link to="">
                <FeedbackIcon/>
              </Link>
            </a>
          </div>

      {/* <!-- Notifications --> */}
      
      

          
        </div>
        {/* @end-container--------- */}
        </nav>
      {/*En @navbar---------- */}
        
        <Routes>
          {/* <Route path="/navbar" element={<Navbar/>} /> */}
          <Route path="home" element={<Home/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="card" element={<Card/>} />
          <Route path="about" element={<About/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<Product/>} />
          <Route path="order" element={<Order/>} />


          
        </Routes>
      </BrowserRouter>




      {/* ================================================ */}
      
      {/* <!-- Footer --> */}
      <footer class="home text-center text-lg-start  bg-white text-muted">
        {/* <!-- Section: Social media --> */}
        <section  class="bg-danger d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Follow Us:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 link-secondary">
              <i class="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="footer">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Contact <br/>
                  Address: phnom penh <br/>
                  Phone: 015791792 <br/>
                  follow Us <br/>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  About Us
                </h6>
                <p>
                  <a href="#!" class="text-reset">Delverlry Information</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Privacy Policy</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Terms & Conditions</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Contact Us</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  My Accout
                </h6>
                <p>
                  <a href="#!" class="text-reset">Sign In</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">View Cart</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">My Wishistt</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Trock My Oder</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3 text-secondary"></i> Phnom Penh, NY 12000, US</p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  momviseu@gmail.com
                </p>
                <p><i class="fas fa-phone me-3 text-secondary"></i> + 015 791 792</p>
                <p><i class="fas fa-print me-3 text-secondary"></i> + 015 590 111</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        {/* <div class="text-center p-4 style="background-color: rgba(0, 0, 0, 0.025);">
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div> */}
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!--End Footer --> */}

    </div>
  )
}
export default App;