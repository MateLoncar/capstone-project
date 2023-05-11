import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 4px
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: teal;
  font-family: sans-serif;
`;

export const SearchWrapper = styled.div`
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-radius: 3px;
  box-shadow: inset 1px 1px 2px 1px rgba(0, 0, 0, 0.58);
`;

export const SearchButton = styled.button`
  background-color: teal;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  box-shadow: outset 1px 1px 2px 1px rgba(0, 0, 0, 0.58);
`;
