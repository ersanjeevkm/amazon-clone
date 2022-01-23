import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLnOne">Hello Guest</span>
          <span className="header_optionLnTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLnOne">Returns</span>
          <span className="header_optionLnTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLnOne">Your</span>
          <span className="header_optionLnTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLnTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
