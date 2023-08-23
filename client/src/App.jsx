import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import AppBar from './components/AppBar'
import SignIn from './components/SingIn'

function App() {


  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#eeeeee', margin: 0 }}>


      <Router>
        <AppBar />
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
