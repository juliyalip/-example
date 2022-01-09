import React from 'react';
import {    Routes,  Route} from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Counter from './component/Counter';
import SigUp from './component/SingUp';
import Clock from './component/Clock';
import News from './component/News';
import Todos from './component/Todos/Todos';


import Container from './component/Container';

function App() {
  return (
    <>
      <Header />
      <hr />
    <Container>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/sing-up" element={<SigUp />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/news" element={<News />} />
          <Route path="/todos" element={<Todos />} />
      
      </Routes>
      </Container>
      </>
  );
}

export default App;
