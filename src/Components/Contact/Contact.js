import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <footer className="bg-dark ">
        <img src="../img/banner.png" className="w-100" height="250px" alt="" />
        <div className="title">
          <h1>#Let’s_talk</h1>
          <p>Leave a message, We love to hear you!</p>
        </div>
      </footer>

      <div className="container mt-5  px-1">
        <div className="row my-5 gx-2 h-100">
          <div className="col-md-6">
            <p>Get in Touch</p>
            <h4>Visit one of our agency locations or contact us today</h4>
            <h3>Head Office</h3>

            <div className="row">
              <div className="col-1 ">
                <span className="loca">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                </span>
              </div>
              <div className="col-11 ">
                <p className="text-secondary">
                  No. 360-362Eo, Kampuchea Krom Blvd., Sangkat Mittapheap, Khan
                  7 Makara, Phnom Penh, Cambodia
                </p>
              </div>

              <div className="col-1 ">
                <span className="loca">
                <i class="fa-solid fa-envelope"></i>
                </span>
              </div>
              <div className="col-11 ">
                <p className="text-secondary">
                 momviseu@gmail.com
                </p>
              </div>

              <div className="col-1 ">
                <span className="loca">
                <i class="fa-solid fa-phone"></i>
                </span>
              </div>
              <div className="col-11 ">
                <p className="text-secondary">
                 015791792
                </p>
              </div>

              <div className="col-1 ">
                <span className="loca">
                <i class="fa-solid fa-timer"></i>
                </span>
              </div>
              <div className="col-11 ">
                <p className="text-secondary">
                Monday to Saturday 9.00am to 5pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706602189505!2d104.8881150793457!3d11.568291899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1673340909655!5m2!1sen!2skh"
              width="500"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt=""
            ></iframe>
          </div>
        </div>
      </div>

      {/* <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706602189505!2d104.8881150793457!3d11.568291899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1673340909655!5m2!1sen!2skh"
                width="500"
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" alt="" >

                </iframe>
            </div> */}

      {/* <section className="container w-25">
        <form method="post" action="https://formspree.io/f/meqwqnzn">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Enter your username"
            autoComplete="off"
            required
          ></input>

          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            required
          ></input>

          <input type="submit" value="Send"></input>
        </form>
      </section> */}

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

        
      </div>
    </div>
  );
};
export default Contact;
