import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // parte logica
  const title = "Hello Word!";
  const block = "Main";
  const endPage = "footer";

  //parte html
  return (
    <>
      <header>
        <h1 className='text-danger'>{title}</h1>
      </header>

      <main>{block}</main>

      <footer>{endPage}</footer>
    </>

  );

}

export default App;