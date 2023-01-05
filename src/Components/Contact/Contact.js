import React from "react";


const Contact = () =>{
    return (
        <div>
            <h1>Contact</h1>


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
export default Contact;