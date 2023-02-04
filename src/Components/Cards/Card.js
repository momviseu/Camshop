import "./Card.scss";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Card = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quentity, setQuentity] = useState(1);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await res.json();
      setLoading(true);
      setData(json);
    } catch (err) {}
  };

  //
  return (
    <div className="main-card  mt-5">
      {loading ? (
        loading
      ) : (
        <div className="justify-content-center my-2 d-flex">
          <div className=" spinner-border " role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
      )}
      <section id="box" class="container">
        <div class=" box-card">
          <div class=" box-img1">
            <img class="img" src={data.image} alt=""></img>
          </div>

          <div class=" box-img2 ">
            <div class="box">
              <img
                class="img"
                src={data.image}
                onClick={(e) => setSelectedImg(data.image)}
                alt=""
              ></img>
            </div>
            <div class="box">
              <img class="img" src={data.image} alt=""></img>{" "}
            </div>
            <div class="box">
              <img class="img" src={data.image} alt=""></img>{" "}
            </div>
            <div class="box">
              <img class="img" src={data.image} alt=""></img>{" "}
            </div>
          </div>
        </div>

        <div class="quentity  w-50">
          <p>{data.title}</p>
          <p>${data.price}</p>
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>select Size</option>
            <option value="1">XXL</option>
            <option value="2">XL</option>
            <option value="3">L</option>
            <option value="4">M</option>
          </select>
          <p>{data.description}</p>

          <div class="add">
            <button
              class="btn btn-primary "
              onClick={() => setQuentity((prev) => (prev === 0 ? 0 : prev - 1))}
            >
              -
            </button>
            {quentity}
            <Link to={`/order/${data.id}`}>
              <button
                class="btn btn-primary"
                onClick={() => setQuentity((prev) => prev + 1)}
              >
                <i class="fa-solid fa-cart-plus"></i> Add Card
              </button>
            </Link>
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-warning">
              Payment
            </button>
          </div>
        </div>
      </section>

      {/* <div class="container  ">
        <div class="row gx-5  h-25">
          <div class="col-md-4 ">
            
            <img src={data.image} height="250px" className=" rounded-3  w-100" alt={data.image}/>
            
          </div>
          <div class="col-md-8 h-25">
            Custom column padding
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Card;
