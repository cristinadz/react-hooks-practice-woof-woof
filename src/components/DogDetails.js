import React from "react";

function DogDetails({dogSelected}) {
if (!dogSelected) return <h3>Select a doggo</h3>;
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={dogSelected.image} alt={dogSelected.name} />
        <h2>{dogSelected.name}</h2>
        <button>{dogSelected.isGoodDog ? "Good Dog" : "Bad Dog" }</button>
      </div>
    </div>
  );
}

export default DogDetails;
