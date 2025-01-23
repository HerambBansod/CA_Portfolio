import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUS/AboutUs';
// import NavBar from './components/NavBar/NavBar'
import ServicesPage from './components/ServicePage/Service';

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
      <Route path="/about-us" element={<AboutUs/>}/>
=======
      {/* <Route path="/About" element{</>} */}
      <Route path="/service" element={<ServicesPage />} />
>>>>>>> 3d3dbde6324a114c0b52a702867d5958503e0946
    </Routes>
  </BrowserRouter>
  );
}

export default App;
