import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const RatingLabel = styled(Label)`
  font-weight: bold;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "gold" : "gray")};
`;

const SubmitButton = styled.button`
  margin-top: 10px;
`;

const WasTherePopup = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState(0);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handleRatingChange(selectedRating) {
    setRating(selectedRating);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const experienceData = { text, imageUrl, rating };
    onSubmit(experienceData);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>My Experience:</Label>
        <Input
          id="experience"
          name="experience"
          type="text"
          value={text}
          onChange={handleTextChange}
        />

        <Label>Image URL:</Label>
        <Input
          id="image-url"
          name="image"
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />

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
      </form>
    </Container>
  );
};

export default WasTherePopup;
