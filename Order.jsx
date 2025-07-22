import React, { useState } from "react";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    quantity: 1,
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${formData.quantity} ${formData.flavor} ice cream(s).`);
    setFormData({ name: "", flavor: "", quantity: 1, address: "" });
  };
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login to access Order!");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="order">
      <h2>Order Your Favorite Ice Cream 🍧</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <select name="flavor" required value={formData.flavor} onChange={handleChange}>
          <option value="">Choose Flavor</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Strawberry">Strawberry</option>
          <option value="Mint">Mint</option>
          <option value="Blueberry">Blueberry</option>
          <option value="Mango">Mango</option>
        </select>
        <input
          type="number"
          name="quantity"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Order;
