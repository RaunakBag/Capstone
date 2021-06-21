import React from "react";
import "./Checkout.css";
import Map from "./GMap/Map";
import Filters from "./Filters/Filters";
import Footer from './../Footer/Footer';
import TrialCard from './../TrialCard/TrialCard';



function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__middle">
      <TrialCard/>
      <Filters/>
      </div>
      <Map />
      <Footer/>
    </div>
  );
}

export default Checkout;
