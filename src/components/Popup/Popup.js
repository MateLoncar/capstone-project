import { useState } from "react";
import { Popup } from "react-leaflet";
import {
  Container,
  Button,
  PopupContainer,
  DeleteButton,
  ButtonRow,
} from "./Popup.styles";
import WasTherePopup from "./WasTherePopup";
import styled from "styled-components";
import Link from "next/link";
import { marker } from "leaflet";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CustomPopup = ({ onDelete, onUpdate, marker }) => {
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
            <ButtonRow>
              {" "}
              <Button
                className="was-there-button"
                onClick={handleWasThereClick}
              >
                WAS THERE
              </Button>
              <Button
                className="want-there-button"
                onClick={handleWantThereClick}
              >
                WANNA GO
              </Button>
            </ButtonRow>

            <Link href={`/places/${marker._id}`}>Experience</Link>
            <DeleteButton className="delete-button" onClick={handleDeleteClick}>
              <MdOutlineDeleteOutline color="red" size={18} />
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
