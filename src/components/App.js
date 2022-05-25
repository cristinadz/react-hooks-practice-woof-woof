import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [dogSelectedId, setDogSelectedId] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((dogArray) => setDogs(dogArray));
  }, []);


// when we click on the corresponding span, it will trigger a function 
// inside of App (parent) this function must take whatever dog was clicked
// and then show it on the dogDetails component, we are changing the dog 
// we are displaying so we must use state.


const handleSelected = dogs.find( (dog) => dog.id === dogSelectedId)




  return (
    <div className="App">
      <Filter />
      <DogBar dogs={dogs} selectedId={setDogSelectedId} />
      <DogDetails dogSelected = {handleSelected}/>
    </div>
  );
}

export default App;
