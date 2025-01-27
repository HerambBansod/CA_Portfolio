import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUS/AboutUs';
// import ContactPageHp from './components/Contact-form-HP/ContactPageHp';

// import NavBar from './components/NavBar/NavBar'
import ServicesPage from './components/ServicePage/Service';
import ContactUs from './components/Contact-form-HP/ContactUs';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
