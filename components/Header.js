import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(searchTerm);
    } else {
      console.error("onSearch is not a function");
    }
  };

  return (
    <div className="header">
      <div className="header__title">World App Map</div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Search for a city or country"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Go</button>
      </div>
    </div>
  );
};

export default Header;
