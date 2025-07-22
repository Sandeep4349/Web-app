import React, { useState } from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
const iceCreams = [
  { name: "Vanilla", img: "https://media.istockphoto.com/id/1326143969/photo/bowl-with-vanilla-ice-cream-balls.jpg?s=612x612&w=0&k=20&c=WxEriNEK7yW7F4AWImLQRrpco-R_bdDYEQoyhigu9fc=" },
  { name: "Chocolate", img: "https://www.willflyforfood.net/wp-content/uploads/2022/05/ice-cream-flavors-chocolate.jpg.webp" },
  { name: "Strawberry", img: "https://5.imimg.com/data5/KO/MX/MY-9134447/strawberry-ice-cream-500x500.jpg" },
  { name: "Mint", img: "https://i.redd.it/mint-flavoured-icecream-is-one-of-the-best-icecream-v0-36c9z4gk3qqd1.jpg?width=900&format=pjpg&auto=webp&s=bab85447851c03dd2ae1bb2331f917c15988e255" },
  { name: "Blueberry", img: "https://ninjacreamiicecream.com/wordpress/wp-content/uploads/2024/07/Ninja-Creami-Blueberry-Ice-Cream-Recipe-500x375.jpg" },
  { name: "Mango", img: "https://www.milkmaid.in/sites/default/files/2022-12/Mango-Ice-Cream-335x300.jpg"},
];

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const filtered = iceCreams.filter((ice) =>
    ice.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
   useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login to access Menu!");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="menu">
      <h1>Explore Our Flavors</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a flavor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="menu-grid">
        {filtered.map((ice, idx) => (
          <div className="card" key={idx} onClick={() => setSelectedImage(ice.img)}>
            <img src={ice.img} alt={ice.name} className="ice-image" />
            <h3>{ice.name}</h3>
          </div>
        ))}
        {filtered.length === 0 && <p>No flavors found.</p>}
      </div>

      {/* ✅ Modal Section */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed Ice Cream" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
