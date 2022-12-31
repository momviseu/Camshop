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
        

        <div class=" container mt-5">
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
                    <button class="btn btn-primary" onClick={() => setQuentity(prev=>prev+1)}>Add</button>
                </div>
                <div class="mt-3">
                    <button type="button" class="btn btn-warning">Payment</button>
                </div>
                
            </div>
        </div>
        
    )
}
export default Card;