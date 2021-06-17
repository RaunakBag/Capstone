import React from 'react';
import './menu.css'

import { BsList } from "react-icons/bs";
import {BiUser} from "react-icons/bi";

function  Menu() {
  return (
      <div className = "menu">
    <div class="wrapper">
    <div class="right-menu">
        <button class="menu-button">
            <BsList />
            <BiUser/>
            </button>
        
        <div class="dropdown-menu">
            <a href = "#">Sign Up</a>
            <a href = "#">Login</a>
            <a href = "#">Host your Hostel</a>
            <a href = "#">Host your Experience</a>
            <a href = "#">Help</a>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Menu;
