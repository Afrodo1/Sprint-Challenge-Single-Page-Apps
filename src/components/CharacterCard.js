import React from "react";
import styled from 'styled-components';

let Box = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    width: 100%;
    text-align: center;
    background-color: #E3DFC9;
    margin-top: 4%;

`;

export default function CharacterCard(props) {

  return (
    <Box>
      <h1>{props.name}</h1>
      <img src={props.image} alt=" Named Character"/>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </Box>
  );
}
