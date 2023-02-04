import React from "react";
import "./Shop.scss";
import { useEffect, useState } from "react";
import Product from "../Home/Product";


const Shop = () =>{

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] =useState(false);

    


    // @Product================================================================
    useEffect(() =>{
         product();
    },[]);

    const product = async () =>{
        try{
            const res = await fetch('http://localhost:1337/api/shops');
            // const res = await fetch('http://localhost:1337/api/products');
            // const data = await response.json();
            const json = await res.json();
            const data = json.data;

            // console.log(data[0].attributes);
            console.log(data);
            setData(data)
            setLoading(true);
        }catch(err){

        }
    }




    return(
        <div>
            <footer className="bg-dark ">
                <img src="./img/b1.jpg" class="w-100" height="250px" alt="" />
                <div class="title">
                    <h1>#stayhome</h1>
                    <p>          
                        Save more with coupons & up to 70% of!
                    </p>
                </div>
                
            </footer>


            {/* search================================================================ */}
            <section className="search ">
                <div className="container row m-auto">
                    <div className="col-4 ">
                        <form>
                                {/* <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label> */}
                                <div class="input-group">
                                {/* <div class="input-group-text">@</div> */}
                                    <input type="text" className="form-control"   onChange={e => setSearch(e.target.value)} id="inlineFormInputGroupUsername" placeholder="Search..." />
                                    <div className="input-group-text  sign"><span><i class="fa-solid fa-magnifying-glass"></i></span></div>
                                </div>     
                        </form>
                    </div>
                </div>
            
            </section>
            

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
                    {/* <img src="http://localhost:3000/img/f3.jpg" alt="" /> */}
                    <div className="row h-100 row-cols-2 row-cols-lg-4  g-2  g-lg-3 ">
                    {
                        // data.length === 0 ?
                        //     <h1>Not Found Product</h1> :
                         
                        data.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.attributes.title
                            .toLowerCase().includes(search);
                        }).map((item) => (
                            <div key={item.id}>
                                <Product title={item.attributes.title} img={item.attributes.img} price={item.attributes.price} />
                            </div>
                        ))
                    }
                           

                    </div>
                </div>
            </section>
            {/*@ End Product================================ */}


            {/* address================================================================ */}
            <div className="main-home mt-5 ">
                {/* container================== */}
                <div className="container">

                    <div className="row row-search m-auto">
                        <div className="col-8">
                            <h3 className="text-white">Sign up for newsletters</h3>
                            <p className="text-white p-sign">get E-mail updates about our lotest shop and special offers.</p>
                        </div>
                        <div className="col-4 ">
                            <form>
                                <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
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
        </div>
    )
}
export default Shop;