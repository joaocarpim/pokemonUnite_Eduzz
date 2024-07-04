import './App.css'
import Menu from './layout/Menu'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Footer } from './layout/Footer/index';
import { Pokemon } from './pages/Pokemon';

function App() {
  return (
    <div>
      <Menu/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:uri" element={<Pokemon/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
