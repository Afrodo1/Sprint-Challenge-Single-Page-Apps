import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

let CardHolder = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #DFBC82;
  `;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[rick, setRick] = useState([]);

  useEffect(() => {
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
    <CardHolder className="character-list">
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
    </CardHolder>
  );
}
