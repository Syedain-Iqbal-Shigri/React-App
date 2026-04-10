import './App.css'
import Navbar from './components/Navbar'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Projects from './assets/pages/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App      
