import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import CharacterList from "./CharacterList";

export default function SearchForm(props) {

  const[morty, setMorty] = useState("");

  const[summer, setSummer] = useState(props.character);

  useEffect(()=> {}, [morty]);

  const handleChange = event => {
    setMorty(event.target.value);

    const summers = props.character.filter(characters => {
      return(
        characters.name.toLowerCase().includes(morty.toLowerCase())
      );      
    });
    setSummer(summers);
  }


 
  return (
    <section className="search-form">
     <form>
       <input
          id ="name"
          type ="text"
          name="textfield"
          placeholder ="Enter Name"
          onChange = {handleChange}
          value = {morty}
          />
     </form>
     <div>
       {summer.map((schmeckle, plumbus)=>{
         return(
           <CharacterCard
              key = {plumbus}
              name ={schmeckle.name}
              species ={schmeckle.species}
              gender = {schmeckle.gender}
              image = {schmeckle.image}
           />
         );
       })}
     </div>
    </section>
  );
}
