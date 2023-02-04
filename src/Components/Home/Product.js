import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Product.css"
import { Link } from "react-router-dom";
import Card from "../Cards/Card";
import axios from "axios";

const Product = ({title, img, price,id}) => {
// const Product = (curElem) => {
    //const {id,title, img, price,} =curElem;
    // const [listProduct, setListProduct] = useState;

    const navigate = useNavigate();
    // const handleCard = () =>{
    //     navigate('/card');
        
    // }

    const handleOrder= ()=>{
        navigate('/order');
    }

    return (
        <div>
            <div className="col ">
                                <div className="p-3 ">
                                <div className="card " >
                                    {/* <Link to={`/testcard/${id}`} > */}
                                    <img src={img}  class="card-img-top" alt="..."/>
                                    {/* </Link> */}
                                    <div className="card-body">
                                        <p className="text-center">{title}</p>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        <span><i className="fa-solid fa-star"></i></span>
                                        
                                        <div className="d-flex justify-content-between">
                                            <p>{price} $</p>
                                            <p >
                                                <ShoppingCartIcon onClick={handleOrder} className="icon"/>
                                            </p>
                                            
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}
export default Product;