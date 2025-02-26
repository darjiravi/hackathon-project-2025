import React from "react";
import "./FarmerRegistration.css";
import Progress from "../../components/Stepper/Progress";
import Navbar from "../../components/Navbar/Navbar";

function FarmerRegistration() {
  return (
    <>
      <Navbar right={false}/>

      <div className="registration-box">
        <div className="farmer-registration">
          <h1>Farmer Registration</h1>
          <p>
            Get Started Selling Today! Simply complete the registration process
            and unlock the power to sell your products on Organic Farm.
          </p>

          <hr />

          <Progress />

          <form action="">
            <h1>Form here</h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default FarmerRegistration;
