import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
      <>
        <Card userName="Hello" hastag1="dance" hastag2="drinking" hastag3="gaming"/>
        <Card userName="World"/>
      </>
  )
}

export default App
