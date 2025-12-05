import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AsociadosList } from './components/AsociadosList'
function App() {
  
  return (
    <>
    <main>
      <h1>
        Lista de Asociados
      </h1>
      <AsociadosList/>
    </main>
       </>
  )
}

export default App
