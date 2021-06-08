import React from "react";
import "./Sports.css"

function Sports() {
  return (
    <div className="sports">
      <li>
        <ul>Indoor
            <ol> Chess</ol>
        </ul>
        <ul>Outdoor 
            <ol> Cricket</ol>
            <ol> Football</ol>
            <ol> Hockey</ol>
        </ul>
      </li>
    </div>
  );
}

export default Sports;
