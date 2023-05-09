import { useState } from "react";
import styled from "styled-components";
import { DeleteButton } from "./Popup.styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 5px;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  background-color: #f8f8f8;
`;

const Label = styled.label`
  margin: 5px 0 5px;
  font-size: 18px;
  font-weight: bold;
`;

const RatingLabel = styled(Label)`
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Star = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "gold" : "gray")};
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
  background-color: #e6e6e6;
  color: #333;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #cccccc;
    cursor: pointer;
  }
`;

const WasTherePopup = ({ onSubmit, onDelete }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState(0);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    onDelete();
  }

  function handleRatingChange(selectedRating) {
    setRating(selectedRating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const experienceData = { text, imageUrl, rating, isVisited: true };
    onSubmit(experienceData);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>My Experience:</Label>
          <Input
            id="experience"
            name="experience"
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Image URL:</Label>
          <Input
            id="image-url"
            name="image"
            type="text"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </InputContainer>

        <RatingLabel>Rating:</RatingLabel>
        <RatingContainer>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              id="stars"
              name="stars"
              key={value}
              selected={value <= rating}
              onClick={() => handleRatingChange(value)}
            >
              &#9733;
            </Star>
          ))}
        </RatingContainer>

        <SubmitButton type="submit">Submit</SubmitButton>
        <DeleteButton type="button" onClick={handleDeleteClick}>
          Delete
        </DeleteButton>
      </form>
    </Container>
  );
};

export default WasTherePopup;
