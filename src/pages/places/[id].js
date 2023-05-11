import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  PlaceCard,
  PlaceImage,
  PlaceTitle,
  PlaceText,
  RatingContainer,
  Star,
  BackButton,
  ExperienceWrapper,
  StyledImage,
} from "../../components/Tools/experiences.style";

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
  console.log(place);
  return (
    <ExperienceWrapper>
      <BackButton onClick={handleBack}>
        <IoReturnUpBack color="teal" size={24} />
      </BackButton>
      <PlaceCard>
        <PlaceImage>
          <StyledImage src={place.image} alt={place.description} />
        </PlaceImage>
        <RatingContainer>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star key={value} selected={value <= place.stars}>
              &#9733;
            </Star>
          ))}
        </RatingContainer>
        <PlaceTitle>Experience:</PlaceTitle>

        <PlaceText>{place.experience}</PlaceText>
      </PlaceCard>
    </ExperienceWrapper>
  );
}
