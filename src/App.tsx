import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './Components/Formulario/formulario';
import Header from 'Components/Header/header';

function App() {
  return (
      <>
        <Header />
        <main>
          <BrowserRouter>
            <RecoilRoot>
              <Routes>
                <Route path='/' element={<Formulario/>} />
              </Routes>
            </RecoilRoot>
          </BrowserRouter>
        </main>
      </>
  );
}

export default App;
