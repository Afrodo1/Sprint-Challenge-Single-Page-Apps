import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

let Head = styled.header`

  display: flex;
  justify-content: space-around;
`;



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Head>
        <div className='links'>
          <Link to ="/">Home</Link>
        </div>
        <div className='links'>
          <Link to="/characters">Characters</Link>
        </div>
      </Head>
    </header>
  );
}
