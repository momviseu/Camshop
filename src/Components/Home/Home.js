import {useState, useEffect} from "react"
import React from "react";
// import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Home.scss"
import Product from "./Product";
import { useNavigate, Link } from "react-router-dom";

// import { useSelector } from "react-redux";

// import Api from "../../Hooks/Api";



const Home = ()=>{


    


    const navigate = useNavigate();
    const handleOrder= ()=>{
        navigate('/order');
    }

    




    // API================================================================
    const [data, setData] = useState([]);
    const [arrival,setArrival]=useState([]);
    const [loading, setLoading] = useState(false);

    // @Product================================================================
    useEffect(() =>{
        product();
    },[]);

    const product = async () =>{
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const json = await res.json();
            // const data = json.data;
            setLoading(true);
            // console.log("===>",json);
            setData(json);
        }catch(err){

        }
    }
    // https://fakestoreapi.com/products

    // const product = async () =>{
    //     try{
    //         const res = await fetch('http://localhost:1337/api/products');
    //         const json = await res.json();
    //         const data = json.data;

    //         setLoading(true);
    //         console.log("===>",data);
    //         setData(data)
    //     }catch(err){

    //     }
    // }


    // @arrival================================================
    useEffect(() =>{
        arrivalData();
    },[]);
    const arrivalData = async () =>{
        const response = await fetch('http://localhost:1337/api/arrivals');
        const json = await response.json();
        const arrival = json.data;
        
        // console.log(data[0].attributes);
        // console.log("===>arr",arrival);
        setArrival(arrival)
    }
    
    
    



    
    
    return(
        <div>

            

            {/*@ main-home-search */}
            <div className="main-home ">
                {/* container================== */}
                <div className="container">

                    <div className="row row-search m-auto">
                        <div className="col-8">
                            <h3 className="text-white">Sign up for newsletters</h3>
                            <p className="text-white p-sign">get E-mail updates about our lotest shop and special offers.</p>
                        </div>
                        <div className="col-4 ">
                            <form>
                                <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group">
                                {/* <div class="input-group-text">@</div> */}
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your email address" />
                                    <div className="input-group-text  sign">Sign up</div>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>

                {/* <div>
                    <button onClick={BackHandle}>goBack</button>
                </div> */}
            </div>
            {/*@ End main-home-search */}




            {/*@ carousel================================================================ */}
            <section className="main-carousel">
            {/* <!-- Carousel wrapper --> */}
                <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <div className="carousel-indicators">
                        <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="1"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to="2"
                        aria-label="Slide 1"
                        ></button>
                    </div>

                    {/* <!-- Inner --> */}
                    <div className="carousel-inner">
                        {/* <!-- Single item --> */}
                        <div class="carousel-item active">
                        <img src="./img/hero4.png" class="d-block w-100" alt="Motorbike Smoke"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(10).webp" class="d-block w-100" alt="Mountaintop"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="d-block w-100" alt="Woman Reading a Book"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        </div>
                    </div>
                    {/* <!-- Inner --> */}

                    {/* <!-- Controls --> */}
                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                    {/* <!-- Carousel wrapper --> */}
            </section>
            {/*@ End carousel================================================================ */}




            {/*@ Product================================ */}
            <section className="product mt-3 ">
                <div className="text-center">
                    <h2>Featured Products</h2>
                </div>
                <div className="container ">
                    
                    {loading ? loading : <div className="justify-content-center my-2 d-flex">
                        <div className=" spinner-border " role="status">
                            <span className="visually-hidden text-center">Loading...</span>
                        </div>
                    </div>}
                    {/* <p>Loading...</p> */}
                    {/* <img src="http://localhost:3000/img/f3.jpg" alt="" /> */}
                    <div className="row h-100 row-cols-2 row-cols-lg-4   g-2  g-lg-3 ">
                        {/* {loading ? <Loading/> : <ShowProducts/>} */}
                        
                    {
                        data.map((results) => (
                            <div key={results.index}>
                                <div className="col ">
                                <div className="p-3 ">
                                <div className="card ">
                                    <Link to={`/card/${results.id}`} >
                                    <img src={results.image}  class="card-img-top" alt="..."/>
                                    </Link>
                                    <div className="card-body">
                                        <p className="text-center">{results.title}</p>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        
                                        <div className="d-flex justify-content-between">
                                            <p>{results.price} $</p>
                                            <p >
                                                <ShoppingCartIcon onClick={handleOrder} className="icon"/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                                {/* <Product id={results.id} title={results.attributes.title} img={results.attributes.img} price={results.attributes.price} /> */}
                            </div>
                        ))
                        
                    }
                           

                    </div>
                </div>
            </section>
            {/*@ End Product================================ */}




            {/*@ Promotions================================================ */}
            <footer className="bg-dark my-4 ">
                <img src="./img/b2.jpg" className="w-100" height="250px" alt="" />
                
                <div className="title">
                    <p>Repair Services</p>
                    <h2 className="text-white">Up to <font className="text-danger">50% off</font> -All t-stirts & Accessories</h2>
                    <button class="btn btn-primary my-2">Explore More</button>
                    <h6 className="text-white">After this section we have a call to action</h6>
                    <h6 className="text-white">In this section we have a beautiful background</h6>
                </div>
                
                
            </footer>
            {/*@ End Promotions================================================ */}



            
            {/* @ New Arrivals================================================ */}
            <section className="Arrivals product mt-3 ">
                <div className="text-center">
                    <h2>New Arrivals</h2>
                </div>
                <div className="container ">
                    <div class="row h-100 row-cols-2 row-cols-lg-4  g-2  g-lg-3 ">
                            

                    {
                        arrival.map((results) => (
                            <div key={results.index}>
                                <Product title={results.attributes.title} img={results.attributes.img} price={results.attributes.price} />
                            </div>

                        ))
                    }
                            
                    </div>
                </div>

                
               
            </section>
            {/* @ End New Arrivals================================================ */}




            {/* ========API=========================== */}
            
        </div>
    )
}
export default Home;