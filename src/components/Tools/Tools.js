import React, { useState } from "react";
import { MarkerButton, FooterWrapper } from "./Tools.styles";

function Tools({ isAddingMarker, toggleAddingMarker }) {
  console.log("in Tools");
  function handleMarkerButtonClick() {
    console.log("in handleMarkerButtonClick");
    toggleAddingMarker();
  }

  return (
    <FooterWrapper>
      <MarkerButton
        style={{ backgroundColor: isAddingMarker ? "#449d44" : "#5cb85c" }}
        onClick={handleMarkerButtonClick}
      >
        {isAddingMarker ? "Cancel" : "Add Marker"}
      </MarkerButton>
    </FooterWrapper>
  );
}

export default Tools;
