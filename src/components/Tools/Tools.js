import React, { useState } from "react";
import { MarkerButton, FooterWrapper } from "./Tools.styles";

function Tools({ isAddingMarker, setIsAddingMarker }) {
  function handleMarkerButtonClick() {
    setIsAddingMarker(!isAddingMarker);
  }

  return (
    <FooterWrapper>
      <MarkerButton
        style={{ backgroundColor: isAddingMarker ? "#449d44" : "#5cb85c" }}
        onClick={handleMarkerButtonClick}
      >
        {isAddingMarker ? "Cancel" : "Marker"}
      </MarkerButton>
    </FooterWrapper>
  );
}

export default Tools;
