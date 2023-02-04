// import React, { useEffect } from "react";

const About = () => {
  // const {loading, error, data} = Product('http://localhost:1337/api/products');

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error.....</p>;

  return (
    <div>
      <footer className="bg-dark ">
        <img src="../img/banner.png" className="w-100" height="250px" alt="" />
        <div className="title">
          <h1>#KnowUs</h1>
          <p>Learn ipsum dolor set amat, consectetur!</p>
        </div>
      </footer>

      <div className="container mt-5  px-1">
        <div className="row my-5 gx-2 h-100">
          <div className="col-md-6">
            <img
              src="../img/a6.jpg"
              className="img-responsive"
              height="400px"
              width="500px"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p className="text-success">Who We Are ?</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nihil dicta vel! Dolorum assumenda reprehenderit nemo quaerat,
              eius esse, fugit enim, dolorem quo quis ut quam totam incidunt
              odio minus iusto dolor accusamus repellendus accusantium! Nulla
              earum saepe repudiandae ducimus, facilis beatae rem qui. Harum
              voluptatibus a quidem autem, distinctio ad unde mollitia sunt
              deleniti dolores eaque. Facere, reiciendis inventore?
            </span>
          </div>
        </div>
      </div>
      <section className="product mt-3 ">
        <div className="text-center">
          <h2>Download Our Web Application</h2>
          <img
            className="rounded-5 my-5"
            width="50%"
            src="../img/app.jpg"
            alt=""
          />
        </div>
      </section>

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
export default About;
