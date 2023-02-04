// import React, { useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
// import PersonIcon from '@mui/icons-material/Person';


import "./App.css";
// import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Card from "./Components/Cards/Card";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Product from "./Components/Home/Product";
import Order from "./Components/Order/Order";


import Errorpage from "./Components/Errorpage";
import Navbar from "./Components/Navbar/Navbar";

import TestBlog from "./Components/Blog/TestBlog";
import Test from "./Components/Cards/Test";


const App = () => {
  
  return (
    <div className="main">
      

      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/navbar" element={<Navbar/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="*" element={<Errorpage />} />

          <Route path="/test" element={<Test/>} />

          
          <Route path="/testBlog/:id" element={<TestBlog />} />
         
        </Routes>
      </BrowserRouter>

      {/* ================================================ */}

      {/* <!-- Footer --> */}
      <footer className="home text-center text-lg-start   bg-white text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="bg-danger m-auto d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Follow Us:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="footer ">
          <div className="container  text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3 m-auto">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Contact <br />
                  Address: phnom penh <br />
                  Phone: 015791792 <br />
                  follow Us <br />
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Delverlry Information
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">My Accout</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Sign In
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    View Cart
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    My Wishistt
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Trock My Oder
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Phnom Penh, NY
                  12000, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  momviseu@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 015 791 792
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 015 590 111
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        {/* <div className="text-center p-4 style="background-color: rgba(0, 0, 0, 0.025);">
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div> */}
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!--End Footer --> */}
    </div>
  );
};
export default App;
