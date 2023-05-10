import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 1000;
`;

export const MarkerButton = styled.button`
  background-color: ${(props) => (props.isAddingMarker ? "red" : "teal")};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: teal;
  }
`;
