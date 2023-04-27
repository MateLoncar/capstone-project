import React, { useState } from "react";
import {
  HeaderWrapper,
  Title,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Header.styles";

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
    <HeaderWrapper>
      <Title>World Travel Map</Title>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search for a place"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearch}>Go</SearchButton>
      </SearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
