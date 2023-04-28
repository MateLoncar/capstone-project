import React, { useState } from "react";
import {
  HeaderWrapper,
  Title,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Header.styles";
import { getCoords } from "./utils";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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
        <SearchButton onClick={() => onSearch(searchTerm)}>Go</SearchButton>
      </SearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
