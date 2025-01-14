import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
// import NavBar from './components/NavBar/NavBar'
import ServicesPage from './components/ServicePage/Service';

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/About" element{</>} */}
      <Route path="/service" element={<ServicesPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
