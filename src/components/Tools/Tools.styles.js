import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const MarkerButton = styled.button`
  background-color: #5cb85c;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #449d44;
  }
`;

export const styles = {
  MarkerButton: {
    background: "white",
    border: "2px solid black",
    padding: "8px 16px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  markerActive: {
    cursor: "crosshair",
  },
};
