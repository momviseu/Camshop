import React from 'react'
// import '../../App.css';
import './Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import { Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeedbackIcon from '@mui/icons-material/Feedback';
// import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PersonIcon from '@mui/icons-material/Person';
// import You from '../../You';

// import { useSelector } from 'react-redux';
// import HandleCard from '../Redux/Reducer/HandleCart';

const Navbar = () => {

    // const  state = useSelector((state) => state.HandleCard)
  return (
    <>
        {/* @navbar---------- */}
      <nav className="navbar navbar-expand-md  bg-light">

            {/* @container----------- */}
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span ><DehazeSharpIcon/></span>               
            </button>
            
            {/* @logo-------- */}
                <a className="navbar-brand  mt-2 mt-lg-0" href="#">
                    {/* <img className="nav-link" src="./img/logo.jpg"  height="70px"
                    alt="MDB Logo"
                    loading="lazy"/> */}
                <img className="nav-link"
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                />
                </a>
            <div  className="collapse  navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav   me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                    <a className="nav-link active" href="#"><Link to="/">Home</Link></a>
                </li>
                
                <li>
                    <a className="nav-link"  href="#"><Link to="/shop">Shop</Link></a>
                </li>
                <li>
                    <a className="nav-link" href="#"><Link to="/about">About Us</Link></a>
                </li>
                <li>
                    <a className="nav-link" href="#"><Link to="/blog">Blog</Link></a>
                </li>
                <li>
                    <a className="nav-link" href="#"><Link to="/contact">Contact Us</Link></a>
                </li>
                </ul>
            </div>

            

            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
                {/* <!-- Icon --> */}
                <a className="text-reset me-3 user-login" href="#">
                <Link className="user" to=""><i><PersonIcon/></i>
                <p className="user-title">Account</p>
                </Link>
                </a>
                <a className="text-reset me-3 ShoppingCartIcon" href="#">
                <Link to="" >
                    <ShoppingCartIcon/>
                    <span className="icon-order">0
                        {/* {state.length} */}
                        </span>
                </Link>
                </a>
                <a className="text-reset me-3" href="#">
                {/* <Link to=""> */}
                    <FeedbackIcon />
                    {/* onClick={ToggleOpen} */}
                {/* </Link> */}
                </a>
            
            </div>

            {/* <!-- Notifications --> */}



            
            </div>
            {/* @end-container--------- */}
        </nav>
        {/*En @navbar---------- */}
    </>
  )
}

export default Navbar