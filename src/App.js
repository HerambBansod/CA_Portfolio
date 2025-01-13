import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
// import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/About" element{</>} */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
