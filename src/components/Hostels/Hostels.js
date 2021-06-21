import React from "react";
import "./Hostels.css";
import Card from "./../Card/Card";

function Hostels() {
  return (
    <div className="hostels">
      <div className="hostels__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat"
          description="Super host with a stunning view of the beach-side in Sunny Bournemouth"
          price="₹10000/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="₹25000/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabulous shopping complex nearby"
          price="₹6500/night"
        />
      </div>
    </div>
  );
}

export default Hostels;
