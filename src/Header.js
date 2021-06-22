import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Menu from "./Menu";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://cdn.dribbble.com/users/18903/screenshots/4417374/truenorth-logo_2x.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <Link to="/admin" className="header__links">
          <div className="header__option">
            <span className="header__one">Hosting?</span>
            <span className="header__two">Admin</span>
          </div>
        </Link>

        {/* <LanguageIcon /> */}

        {/* <Avatar /> */}

        <Link to={!user && "/login"} className="header__links">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__one">
              Hello {!user ? "Guest" : user.displayName}
            </span>
            <span className="header__two">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Menu />

        {/* <ExpandMoreIcon /> */}
      </div>
    </div>
  );
}

export default Header;
