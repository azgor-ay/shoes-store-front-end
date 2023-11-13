import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="navMenu">
        <Link to="/orders">
          <span className="product_count">10</span>
          <FaCartPlus />
        </Link>
        <AiOutlineMenu className="side_cart" />
      </nav>
    </div>
  );
};

export default Header;
