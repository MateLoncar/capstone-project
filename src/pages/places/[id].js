import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/router";
import {
  PlaceCard,
  PlaceImage,
  PlaceTitle,
  PlaceText,
  ImageLink,
  ImageText,
  RatingContainer,
  Star,
  BackButton,
} from "./experiences.style";

export default function SinglePlace() {
  const router = useRouter();
  const id = router.query.id;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    async function getPlace() {
      const response = await fetch(`/api/places/${id}`);
      const data = await response.json();
      setPlace(data);
    }
    if (!id) {
      return;
    }
    getPlace();
  }, [id]);

  if (!place) {
    return "loading..";
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <BackButton onClick={handleBack}>
        <IoReturnUpBack color="teal" size={24} />
      </BackButton>
      <PlaceCard>
        <PlaceTitle>Experience:</PlaceTitle>
        <RatingContainer>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star key={value} selected={value <= place.stars}>
              &#9733;
            </Star>
          ))}
        </RatingContainer>
        <PlaceText>{place.experience}</PlaceText>
        <PlaceImage>
          <ImageLink
            href={place.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageText>{place.image}</ImageText>
          </ImageLink>
        </PlaceImage>
      </PlaceCard>
    </>
  );
}
