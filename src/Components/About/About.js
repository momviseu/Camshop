// import React, { useEffect } from "react";

const About = () =>{
    // const {loading, error, data} = Product('http://localhost:1337/api/products');
    
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error.....</p>;

   


    return(
        <div>
           
           <h1>About </h1>

            {/* {data.map((product,index) => (
                <div key={data[index].id} >
                    <h2>{data[index].attributes.title}</h2>
                </div>
            ))} */}

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
export default About;
