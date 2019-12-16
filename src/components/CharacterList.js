import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const[rick, setRick] = useState([])

  useEffect((props) => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(meeseeks => {
      console.log(meeseeks);
      const data = meeseeks.data.results;
      return setRick(data);
    })
    .catch(err => {
      console.log("Error:",err);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [setRick]);

  console.log(rick);

  return (
    <section className="character-list">
      <h1>The LineUp</h1>
      <SearchForm character = {rick}/>
  <div>{rick.map((schmeckle, plumbus) => {
    return(
      <CharacterCard
        key = {plumbus}
        name = {schmeckle.name}
        species = {schmeckle.species}
        gender = {schmeckle.gender}
        img = {schmeckle.image}
        />
    )
  })}</div>
    </section>
  );
}
