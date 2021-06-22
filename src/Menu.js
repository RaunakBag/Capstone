import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

import { BsList } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function Menu() {
  return (
    <div className="menu">
      <div class="wrapper">
        <div class="right-menu">
          <button class="menu-button">
            <BsList />
            <BiUser />
          </button>

          <div class="dropdown-menu">
            <Link to="#" className="Signup">
              Signup
            </Link>
            <Link to="#" className="Login">
              Login
            </Link>
            <Link to="#" className="Hostel">
              Host your Hostel
            </Link>
            <Link to="#" className="Exp">
              Host your Experience
            </Link>
            <Link to="#" className="Help">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
