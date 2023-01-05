import React from "react";
import {useState, useEffect} from "react"

import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Home.scss"



const Home = ()=>{
    

    // API================================================================
    
    




    const navigate= useNavigate();
    const BackHandle = () =>{
        navigate('/card')
    }
    // const history = useHistory();
    return(
        <div>

            
            

            {/*@ main-home-search */}
            <div class="main-home ">
                {/* container================== */}
                <div class="container">

                    <div class="row row-search">
                        <div class="col-8">
                            <h3 class="text-white">Sign up for newsletters</h3>
                            <p class="text-white p-sign">get E-mail updates about our lotest shop and special offers.</p>
                        </div>
                        <div class="col-4 ">
                            <form>
                                <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                {/* <div class="input-group-text">@</div> */}
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Your email address" />
                                    <div class="input-group-text  sign">Sign up</div>
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
            <section class="main-carousel">
            {/* <!-- Carousel wrapper --> */}
                <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <div class="carousel-indicators">
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
                    <div class="carousel-inner">
                        {/* <!-- Single item --> */}
                        <div class="carousel-item active">
                        <img src="./img/hero4.png" class="d-block w-100" alt="Motorbike Smoke"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(10).webp" class="d-block w-100" alt="Mountaintop"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>

                        {/* <!-- Single item --> */}
                        <div class="carousel-item">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="d-block w-100" alt="Woman Reading a Book"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        </div>
                    </div>
                    {/* <!-- Inner --> */}

                    {/* <!-- Controls --> */}
                    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                    {/* <!-- Carousel wrapper --> */}
            </section>
            {/*@ End carousel================================================================ */}




            {/*@ Product================================ */}
            <section class="product mt-3 ">
                <div class="text-center">
                    <h2>Product</h2>
                </div>
                <div class="container ">
                <div class="row h-100 row-cols-2 row-cols-lg-4  g-2  g-lg-3 ">
                            <div class="col ">
                                <div class="p-3 ">
                                <div class="card " >
                                    <img onClick={BackHandle} src="img/f1.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f2.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f3.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f4.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col ">
                                <div class="p-3 ">
                                <div class="card " >
                                    <img src="img/f5.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f6.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f7.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/f8.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </section>
            {/*@ End Product================================ */}




            {/*@ Promotions================================================ */}
            <footer class="bg-dark my-4 ">
                <img src="./img/b2.jpg" class="w-100" height="250px" alt="" />
                
                <div class="title">
                    <p>Repair Services</p>
                    <h2 class="text-white">Up to <font class="text-danger">50% off</font> -All t-stirts & Accessories</h2>
                    <button class="btn btn-primary my-2">Explore More</button>
                    <h6 class="text-white">After this section we have a call to action</h6>
                    <h6 class="text-white">In this section we have a beautiful background</h6>
                </div>
                
                
            </footer>
            {/*@ End Promotions================================================ */}


            
            {/* @ New Arrivals================================================ */}
            <section class="Arrivals product mt-3 ">
                <div class="text-center">
                    <h2>New Arrivals</h2>
                </div>
                <div class="container ">
                <div class="row h-100 row-cols-2 row-cols-lg-4  g-2  g-lg-3 ">
                            <div class="col ">
                                <div class="p-3 ">
                                <div class="card " >
                                    <img onClick={BackHandle} src="img/n1.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n2.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n3.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n4.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col ">
                                <div class="p-3 ">
                                <div class="card " >
                                    <img src="img/n5.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n6.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n7.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 ">
                                <div class="card" >
                                    <img src="img/n8.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                    <p class="text-center">Cartoon Astronaut T-Shirts </p>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        
                                        <div class="d-flex justify-content-between">
                                            <p>35$</p>
                                            <p >
                                                <ShoppingCartIcon/>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                </div>

                
               
            </section>
            {/* @ End New Arrivals================================================ */}




            {/* ========API=========================== */}
            
        </div>
    )
}
export default Home;