import { useState } from "react";
import { Popup } from "react-leaflet";
import {
  Container,
  Button,
  PopupContainer,
  DeleteButton,
} from "./Popup.styles";
import WasTherePopup from "./WasTherePopup";

const CustomPopup = ({ onDelete, onUpdate }) => {
  const [showWasTherePopup, setShowWasTherePopup] = useState(false);

  function handleWasThereClick(e) {
    e.stopPropagation();
    setShowWasTherePopup(true);
  }

  function handleWantThereClick(e) {
    e.stopPropagation();
    onUpdate({ isVisited: false });
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    onDelete();
  }

  return (
    <PopupContainer>
      <Popup className="custom-popup" isOpen={true}>
        {!showWasTherePopup && (
          <Container>
            <Button className="was-there-button" onClick={handleWasThereClick}>
              I was there
            </Button>

            <Button
              className="want-there-button"
              onClick={handleWantThereClick}
            >
              I want to go there
            </Button>

            <DeleteButton className="delete-button" onClick={handleDeleteClick}>
              Delete
            </DeleteButton>
          </Container>
        )}
        {showWasTherePopup && (
          <WasTherePopup
            onUpdate={onUpdate}
            onDelete={onDelete}
            onSubmit={onUpdate}
            onClose={() => setShowWasTherePopup(false)}
          />
        )}
      </Popup>
    </PopupContainer>
  );
};

export default CustomPopup;
