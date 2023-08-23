import './App.css'
import SignUp from '../components/SignUp'
import { useState } from 'react'
import AppBar from '../components/AppBar'

function App() {


  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#eeeeee', margin: 0 }}>
      <AppBar />
      < SignUp />
    </div >
  )
}

export default App
