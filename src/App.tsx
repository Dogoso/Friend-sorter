import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from 'Components/Header/header';
import Main from 'Components/Main/main';
import Sorteio from 'Components/Sorteio/sorteio';
import Index from 'Pages/index';

function App() {
  return (
      <>
        <Header />
        <Main>
          <BrowserRouter>
            <RecoilRoot>
              <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/sorteio' element={<Sorteio />}/>
              </Routes>
            </RecoilRoot>
          </BrowserRouter>
        </Main>
      </>
  );
}

export default App;
