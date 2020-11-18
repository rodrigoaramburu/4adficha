
import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Personagem from './components/Personagem';
import { PersonagemModel } from './hooks/usePersonagemState';

import FundoMadeira from './assets/fundo-madeira.jpg';
import Header from './components/Header';
import ToTopoButton from './components/ToTopoButton';


const AppContainer = styled.div`
  background-image: url(${FundoMadeira});
  background-size: 100%;
  background-repeat: repeat-y;
  min-height:100vh;
`;

const Main = styled.main`
  width:900px;
  
  padding:10px;	

  @media(max-width: 640px){
    width:100%;
    padding:0;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;



export const PersonagemContext = React.createContext([{}, () => { }]);

function App() {


  let personagens = localStorage.getItem('personagens');

  if (personagens == null) {
    personagens = [
      new PersonagemModel(),
      new PersonagemModel(),
      new PersonagemModel(),
      new PersonagemModel(),
    ]
  } else {
    personagens = JSON.parse(personagens);
  }

  const [personagensState, setPersonagensState] = useState(personagens);

  return (
    <AppContainer className="App">
      <PersonagemContext.Provider value={[personagensState, setPersonagensState]}>

        <Header />

        <MainContainer>
          <Main className="body">
            <Personagem posicao="0" />

            <Personagem posicao="1" />

            <Personagem posicao="2" />

            <Personagem posicao="3" />

          </Main>

        </MainContainer>

      </PersonagemContext.Provider>

      <ToTopoButton />
    </AppContainer>
  );
}

export default App;
