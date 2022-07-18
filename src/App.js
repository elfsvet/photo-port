import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
// JSX
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
