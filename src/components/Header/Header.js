import React, { useState } from "react";
import {
  HeaderWrapper,
  Title,
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Header.styles";
import { GiCompass } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";

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
      <Title>
        World Travel Map <GiCompass /> <MdTravelExplore />
      </Title>

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
