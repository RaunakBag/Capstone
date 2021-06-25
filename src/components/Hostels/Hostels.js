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
          description="Great place for a short stay, host is pretty chill guy and consequently the whole place is pretty chilled out. Clean washrooms and clean rooms, a bargain for its location and hygiene."
          price="₹10000/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse"
          description="Great place for a short stay, host is pretty chill guy and consequently the whole place is pretty chilled out. Clean washrooms and clean rooms, a bargain for its location and hygiene."
          price="₹25000/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="The location of the room is amazing. It is very near to the bus stop and is in the city center. It has accessibility to some amazing restaurants and places of interest. It even has a co-working space that helps people traveling for business."
          price="₹6500/night"
        />
      </div>
    </div>
  );
}

export default Hostels;
