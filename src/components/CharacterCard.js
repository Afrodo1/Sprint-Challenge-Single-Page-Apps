import React from "react";

export default function CharacterCard(props) {

  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="Image of Named Character"/>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}
