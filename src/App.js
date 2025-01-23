import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUS/AboutUs';
// import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
