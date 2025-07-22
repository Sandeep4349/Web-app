import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
   useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login to access Contact!");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="contact"
      onSubmit={(e) => {
      e.preventDefault(); // Prevent actual page reload
      alert("✅ Your message has been sent successfully!");
      e.target.reset(); // Optional: clears the form
    }}
    >
      <h2>Contact Us 📞</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
