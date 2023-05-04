import React from "react";
import { Popup } from "react-leaflet";
import {
  Container,
  Button,
  PopupContainer,
  DeleteButton,
} from "./Popup.styles";

const CustomPopup = ({ onWasThereClick, onWantThereClick, onDelete }) => {
  function handleDeleteClick(e) {
    e.stopPropagation();
    onDelete();
  }

  return (
    <PopupContainer>
      <Popup className="custom-popup" isOpen={true}>
        <Container>
          <Button className="was-there-button" onClick={onWasThereClick}>
            I was there
          </Button>
          <Button className="want-there-button" onClick={onWantThereClick}>
            I want to go there
          </Button>
          <DeleteButton className="delete-button" onClick={handleDeleteClick}>
            Delete
          </DeleteButton>
        </Container>
      </Popup>
    </PopupContainer>
  );
};

export default CustomPopup;
