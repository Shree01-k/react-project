import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from "./components/Narbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About name={"Shrinath"} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
