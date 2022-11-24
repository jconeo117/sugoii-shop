import './App.css';
import React  from 'react'
import { Nav } from './componentes/navbar/Nav';
import { Main } from './pages/main/main';

function App() {

  return (
    <>
      <Nav/>
      <div >
        <Main/>
      </div>
    </>
  );
}

export default App;
