import React from 'react';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import carticon from './cartnew30.png';
import "./header.css";
import amazonLogob from './logo.jpg';
import searchicon from './search_icon.png';

function Header() {
  const [{ cart }]= useStateValue();
  console.log(cart);
  return (
    <nav className="header">
      <Link to="/">
      <img
        className="header__logo"
        src={amazonLogob}
        alt=""
      />
      </Link>
      <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <img src={searchicon} alt="Search Icon" className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login"className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,Arr</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>

        <Link to="/"className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/"className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime </span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <img
              className="header__carticon"
              src={carticon}
              alt=""
            />
            <span className="header__basketcount">{cart?.length}</span>
          </div>
      </Link>
        

      </div>

      

    </nav>
  );
}

export default Header;