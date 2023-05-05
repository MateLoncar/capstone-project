import React, { useState } from "react";
import {
  HeaderWrapper,
  Title,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Header.styles";
import { getCoords } from "../../services/utils";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
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
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={() => onSearch(searchTerm)}>Go</SearchButton>
      </SearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
