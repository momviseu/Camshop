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
import Card from "./Components/Cards/Card";


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
                <a class="nav-link" href="#"><Link to="/home">Home</Link></a>
              </li>
            
              <li>
                <a class="nav-link"  href="#"><Link to="">Shop</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="">About Us</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="">Blog</Link></a>
              </li>
              <li>
                <a class="nav-link" href="#"><Link to="">Contact Us</Link></a>
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
              <Link to="">
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
        <Routes>
          {/* <Route path="/navbar" element={<Navbar/>} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/card" element={<Card/>} />


          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;