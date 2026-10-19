import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';

import NavBar from './components/navbar.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        {/* Definición de vistas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
