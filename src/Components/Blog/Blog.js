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
    const data = await fetch(
      "https://api.pujakaitem.com/api/products"
    );
    const itemsdata = await data.json();
    // console.log(itemsdata.data);
    setItems(itemsdata);
  };
  return (
    <div>
      <h1>Blog</h1>

      {items.map((item) => (
        <h1 >
          <Link to={`/testBlog/${item.id}`}>{item.id}</Link>
        </h1>
      ))}

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
