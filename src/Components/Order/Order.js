import React from "react";
import "./Order.scss";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
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
  return (
    <div>
      <footer class="bg-dark ">
        <img src="../img/banner.png" class="w-100" height="250px" alt="" />
        <div class="title">
          <h1>#Cart</h1>
          <p>Add you coupon code & SAVE Upto 70%!</p>
        </div>
      </footer>

      <div class="main-table container w-100 table-responsive my-4">
        <div class="w-100">
          <table class="table  align-middle mb-0 w-100   ">
            <thead class="bg-light text-center">
              <tr>
                <th>REMOVE</th>
                <th>IMAGE</th>
                <th>TITLE</th>
                <th>SIZE</th>
                <th>PRICE</th>
                <th>QUENTITY</th>
                <th>SUBTOTAL</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <td>
                  <span>
                    <i class="text-danger fa-solid fa-trash"></i>
                  </span>
                </td>

                <td>
                  <div class=" align-items-center">
                    <img src={data.image} alt="" />
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">{data.title}</p>
                </td>
                <td>
                  <p class="fw-normal mb-1">L</p>
                </td>
                <td>
                  <p class="fw-normal mb-1">${data.price}</p>
                </td>
                <td>
                  <div class="q m-auto align-items-center">
                    <p class="fw-normal mb-1">{quentity}</p>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1">100$</p>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm btn-rounded"
                  >
                    Payment
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* {
                data?.map((item) => (
                    <div class="main-table container w-100 table-responsive my-4">
                        <div key={item.id} class="w-100">
                            
                            <table class="table  align-middle mb-0 w-100   ">
                                <thead class="bg-light text-center">
                                    <tr>
                                    <th>REMOVE</th>
                                    <th>IMAGE</th>
                                    <th>TITLE</th>
                                    <th>SIZE</th>
                                    <th>PRICE</th>
                                    <th>QUENTITY</th>
                                    <th>SUBTOTAL</th>
                                    <th>AMOUNT</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center" >
                                    <tr>
                                        <td><span ><i class="text-danger fa-solid fa-trash"></i></span></td>
                                        
                                    <td>
                                    
                                        <div class=" align-items-center">
                                        <img
                                            src="./img/f1.jpg"
                                            alt="" />
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">{item.title}</p>
                                        
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">L</p>
                                    </td>
                                    <td>
                                        <p class="fw-normal mb-1">{item.price}</p>
                                    </td>
                                    <td>
                                        <div class="q m-auto align-items-center">
                                        <p class="fw-normal mb-1">2</p>
                                        </div>
                                    </td>
                                    <td>
                                    <p class="fw-normal mb-1">100$</p>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-sm btn-rounded">
                                        Payment
                                        </button>
                                    </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </div>
                    </div>
                    
                ))
            } */}

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
export default Order;
