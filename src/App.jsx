import { useState } from 'react'
import './App.css'

import api from './api.js'
import NavBar from './components/navbar.jsx'
import Registro from './components/registro.jsx'
import Main from './main.jsx'

function App() {
  console.log(api)
  return (
    <>
      <NavBar />
      <Main />
    </>
  )
}

export default App
