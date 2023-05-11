import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  background-color: #f2f2f2;
  padding: 15px;
  border: 1px solid #c0c0c0;
  border-radius: 4px
  box-shadow: 22px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const MarkerButton = styled.button`
  background-color: ${(props) => (props.isAddingMarker ? "red" : "teal")};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  box-shadow: outset 1px 1px 2px 1px rgba(0, 0, 0, 0.58);

  &:hover {
    background-color: teal;
  }
`;
