import React from "react";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {

    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/');
    }
    
  return (
    <div className="my-5 container w-100  d-flex justify-content-center">
      <div className="">
        <h1 className="card-title">404</h1>
        <p className="card-text text-secondary ">
            The page you are looking for does not exist. How you here
            is a mystery. But you can click the button below to go back the homepage.
        </p>
        
        <button href="#" onClick={handleBack} className="btn btn-primary">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
