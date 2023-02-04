import React from "react";
import { useState, useEffect } from "react";
import TestBlog from "./TestBlog";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    fetchitems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchitems = async () => {
    const data = await fetch("https://api.pujakaitem.com/api/products");
    const itemsdata = await data.json();
    // console.log(itemsdata.data);
    setItems(itemsdata);
  };
  return (
    <div>
      <footer className="bg-dark ">
        <img src="../img/b19.jpg" className="w-100" height="250px" alt="" />
        <div className="title">
          <h1>#Readmore</h1>
          <p>Read all case studies about our products!</p>
        </div>
      </footer>

      <div className="container mt-5  px-1">
        <div className="row my-5 gx-2 h-100">
          <div className="col-md-4">
            <img
              src="../img/h (1).jpg"
              className="img-responsive"
              height="300px"
              width="400px"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <p className="text-success">The Cotton-Jersey Zip-Up Hoodie</p>
            <p className="text-secondary">kickstarter man braid godard coloring book. Racletter
            waistcoat selfies yr wolf chartreuse hexagon irony. godard...</p>
            <h4>CONTINUE READING</h4>
          </div>
        </div>

        <div className="row gx-2 h-100">
          <div className="col-md-4">
            <img
              src="../img/h (2).jpg"
              className="img-responsive"
              height="300px"
              width="400px"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <p className="text-success">How to Style a Quiff</p>
            <p className="text-secondary">
              kickstarter man braid godard coloring book. Racletter waistcoat
              selfies yr wolf chartreuse hexagon irony. godard...
            </p>

            <h4>CONTINUE READING</h4>
          </div>
        </div>

        <div className="row my-5 gx-2 h-100">
          <div className="col-md-4">
            <img
              src="../img/h (3).jpg"
              className="img-responsive"
              height="300px"
              width="400px"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <p className="text-success">Must-Have Skater Girl Items</p>
            <p className="text-secondary">kickstarter man braid godard coloring book. Racletter
            waistcoat selfies yr wolf chartreuse hexagon irony. godard...</p>
            <h4>CONTINUE READING</h4>
          </div>
        </div>
      </div>

      {/* address================================================================ */}
      <div className="main-home mt-5 ">
        {/* container================== */}
        <div className="container">
          <div className="row row-search m-auto">
            <div className="col-8">
              <h3 className="text-white">Sign up for newsletters</h3>
              <p className="text-white p-sign">
                get E-mail updates about our lotest shop and special offers.
              </p>
            </div>
            <div className="col-4 ">
              <form>
                <label
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Username
                </label>
                <div class="input-group">
                  {/* <div class="input-group-text">@</div> */}
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your email address"
                  />
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
    </div>
  );
};
export default Blog;
