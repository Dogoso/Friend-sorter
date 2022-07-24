import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './Components/Formulario/formulario';
import Header from 'Components/Header/header';
import Main from 'Components/Main/main';

function App() {
  return (
      <>
        <Header />
        <Main>
          <BrowserRouter>
            <RecoilRoot>
              <Routes>
                <Route path='/' element={<Formulario/>} />
              </Routes>
            </RecoilRoot>
          </BrowserRouter>
        </Main>
      </>
  );
}

export default App;
