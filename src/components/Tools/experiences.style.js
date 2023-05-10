import styled from "styled-components";

export const PlaceCard = styled.div`
  background-color: lightgrey;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margin-bottom: 20px;
`;

export const PlaceImage = styled.div`
  width: 100%;
  max-height: 200px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ImageLink = styled.a`
  text-decoration: none;
`;

export const ImageText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const PlaceTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: teal;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
`;

export const Star = styled.span`
  color: ${(props) => (props.selected ? "gold" : "grey")};
  cursor: pointer;
`;

export const PlaceText = styled.p`
  font-size: 16px;
  color: grey;
  margin-top: 5px;
`;

export const StarIcon = styled.span`
  color: teal;
  text-shadow: 2px 2px lightgrey;
`;

export const BackButton = styled.button`
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999;
`;
