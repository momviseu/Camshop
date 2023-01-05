import React from "react"
import { useState } from "react"
import "./Card.scss"

const Card = ()=>{
    const [selectedImg,setSelectedImg]=useState(0);
    const [quentity,setQuentity]=useState(1);

    const images = [
        'img/f1.jpg',
        'img/f2.jpg',
        'img/f3.jpg',
        'img/f4.jpg',
        'img/f5.jpg',
        'img/f6.jpg',
        'img/f7.jpg',
        'img/f8.jpg',
    ]
    return(
        

        <div class="main-card  mt-5">
            <section id="box" class="container">
                <div class=" box-card">
                    <div class=" box-img1">
                        <img class="img" src={images[selectedImg]} alt=""></img>
                    </div>

                    <div class=" box-img2">
                    <div class="box">
                            <img class="img" src={images[0]} onClick={(e) => setSelectedImg(0)} ></img>
                        </div>
                        <div class="box"> 
                            <img class="img" src={images[1]} onClick={(e) => setSelectedImg(1)} ></img>
                        </div>
                        <div class="box">
                            <img class="img" src={images[2]} onClick={(e) => setSelectedImg(2)} ></img>
                        </div>
                        <div class="box">
                            <img class="img" src={images[3]} onClick={(e) => setSelectedImg(3)} ></img>
                        </div>
                        
                    </div>
                </div>

                <div class="quentity">
                    <p>Men's Fashion T Shirt</p>
                    <p>$35.00</p>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>select Size</option>
                        <option value="1">XXL</option>
                        <option value="2">XL</option>
                        <option value="3">L</option>
                        <option value="4">M</option>
                        
                    </select>
                    
                    
                    <div class="add">
                        <button class="btn btn-primary " onClick={() => setQuentity(prev=>prev ===0 ? 0 : prev-1)}>-</button>
                            {quentity}
                        <button class="btn btn-primary" onClick={() => setQuentity(prev=>prev+1)}><i class="fa-solid fa-cart-plus"></i> Add Card</button>
                    </div>
                    <div class="mt-3">
                        <button type="button" class="btn btn-warning">Payment</button>
                    </div>
                    
                </div>
            </section>



            
            {/* address================================================================ */}
            <div class="main-home  mt-5 ">
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
            
        </div>
        
    )
}
export default Card;