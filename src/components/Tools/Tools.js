import React, { useState } from "react";
import { MarkerButton, FooterWrapper } from "./Tools.styles";

function Tools({ isAddingMarker, toggleAddingMarker }) {
  function handleMarkerButtonClick() {
    toggleAddingMarker();
  }

  return (
    <FooterWrapper>
      <MarkerButton
        isAddingMarker={isAddingMarker}
        onClick={handleMarkerButtonClick}
      >
        {isAddingMarker ? "Cancel" : "Add Marker"}
      </MarkerButton>
    </FooterWrapper>
  );
}

export default Tools;
