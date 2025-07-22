import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    
  };

  return (
    <nav className="navbar">
      <div className="logo">🍦 IceCream Delight</div>
      <ul className="nav-links">
        {/* Show Register/Login only when NOT logged in */}
        {!isLoggedIn && (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}

        {/* Show Home/Menu/Order/Contact only when logged in */}
        {isLoggedIn && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "1rem"
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
