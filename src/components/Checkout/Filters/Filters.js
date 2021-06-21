import React from "react";
import './Filters.css'
import Price from "./Price/Price";
import Checkbox from './Checkbox/Checkbox';

function Filters() {
  return (
    <div className="filters">
        <h4>Filters</h4>
      <Price />
      <Checkbox/>
    </div>
  );
}

export default Filters;
