import React, { useState } from "react";
import "./Interests.css";
import styled from "styled-components";


function Interests() {
  const types = ["Sports", "Music", "Dance", "Fitness", "Travel"];
  const [active, setActive] = useState(types[0]);
  const Tab = styled.button`
    padding: 10px 30px;
    cursor: pointer;
    opacity: 0.6;
    margin-left: 100px;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    ${({ active }) =>
      active &&
      `
    border-bottom: 2px solid black;
    opacity: 1.5;
  `}
  `;

  return (
    <div className="interests">
      <h1>Search by Interest</h1>
      <div className="interests__headers">
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
        <p />
        <p> Your interest: {active} </p>
      </div>
    </div>
  );
}

export default Interests;
