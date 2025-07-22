import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please login to access Home!");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home">
      <h1>Welcome to IceCream Delight 🍨</h1>
      <p>Experience the coolest and creamiest ice creams in town!</p>
      <img
        src="https://www.pngitem.com/pimgs/m/2-21224_food-frozen-ice-cream-ice-ice-ice-cream.png"
        alt="Ice Cream"
        className="home-img"
      />
    </div>
  );
}

export default Home;
