import React, { useState } from "react";

const ExperiencePopup = ({ marker }) => {
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlaceDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/places/${marker._id}`, {
        method: "POST",
      });
      const data = await response.json();
      setPlaceData(data);
    } catch (error) {
      console.error("Error fetching place details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="marker-popup">
      <h3>Place Details</h3>
      <button onClick={fetchPlaceDetails} disabled={loading}>
        {loading ? "Loading..." : "Load Place Details"}
      </button>
      {placeData && (
        <>
          <h4>Experiences</h4>
          {placeData.experiences && placeData.experiences.length > 0 ? (
            <ul>
              {placeData.experience.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          ) : (
            <p>No experiences available for this place.</p>
          )}

          <h4>Image URL</h4>
          <p>{placeData.image}</p>

          <h4>Stars</h4>
          <p>{placeData.stars}</p>
        </>
      )}
    </div>
  );
};

export default ExperiencePopup;
