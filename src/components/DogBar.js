import React from "react";

function DogBar({ dogs, selectedId }) {
  const dogList = dogs.map((dog) => {
    return (
      <span key={dog.id} onClick={ ()=>selectedId(dog.id)}>
        {dog.name}
      </span>
    );
  });

  return <div id="dog-bar">{dogList}</div>;
}

export default DogBar;
