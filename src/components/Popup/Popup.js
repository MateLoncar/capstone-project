import React from "react";
import { Popup } from "react-leaflet";
import {
  Container,
  Button,
  PopupContainer,
  DeleteButton,
} from "./Popup.styles";

const CustomPopup = ({ onWasThereClick, onWantThereClick, onDelete }) => {
  function handleDeleteClick() {
    onDelete();
  }

  return (
    <PopupContainer>
      <Popup className="custom-popup" isOpen={true}>
        <Container>
          <Button onClick={onWasThereClick}>I was there</Button>
          <Button onClick={onWantThereClick}>I want to go there</Button>
          <DeleteButton className="delete-button" onClick={handleDeleteClick}>
            Delete
          </DeleteButton>
        </Container>
      </Popup>
    </PopupContainer>
  );
};

export default CustomPopup;
