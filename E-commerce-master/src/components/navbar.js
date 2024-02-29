import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`}  className="nav_headings">
            Products
          </Link>

          <Link to={`/addProduct`} className="nav_headings">
            <span className="mx-5" >
              Add a Product
            </span>
          </Link>
          <span className="nav_headings">About</span>
          <Link to={`/login`}><span className="nav_signin">Login</span></Link>
          <Link to={`/signup`}><span className="nav_signin">SignUp</span></Link>
        
        </span>
        <div className="cart">
         
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            {lengthItems?.length >=1 && <span>{lengthItems?.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
