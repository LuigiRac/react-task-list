import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  // parte logica
  const title = "Task Manager";
  const block = "Main";
  const endPage = "footer";

  //parte html
  return (
    <>
      <header>
        <nav className="navbar bg-green-water">
          <span className="navbar-brand fw-bold m-2">{title}</span>
        </nav>

      </header>

      <main></main>

      <footer></footer>
    </>

  );

}

export default App;