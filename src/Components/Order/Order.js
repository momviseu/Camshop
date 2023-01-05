
import React from "react";
import "./Order.scss"


const Order = () =>{
    const data=[
        {
            title: "Cartoon Astronaut T-Shirts ",
            img: './img/f1.jpg',
            price: '35$',
            disc: "jjjjjjjjjjjjjj",
        }
    ]
    return (
        <div>
            <footer class="bg-dark ">
                <img src="./img/banner.png" class="w-100" height="250px" alt="" />
                <div class="title">
                    <h1>#Cart</h1>
                    <p>
                        Add you coupon code & SAVE Upto 70%!
                    </p>
                </div>
                
            </footer>
            
            {
                data?.map((item) => (
                    <div class="main-table container w-100 table-responsive my-4">
                        <div key={item.id} class="w-100">
                            {/* <h1>{item.title}</h1>
                            <h1>{item.img}</h1>
                            <h1>{item.price}</h1>
                            <h1>{item.disc}</h1> */}

                        {/* table================================================================ */}
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
            }


            {/* address================================================================ */}
            <div class="main-home mt-5 ">
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
export default Order;