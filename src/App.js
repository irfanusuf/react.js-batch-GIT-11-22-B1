import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
// import Dashboard from './components/Dashboard';
import Dashboard2 from './components/Dashboard2';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      
      <Navbar />
      
        <Routes>
          <Route path="/x" element={<Carousel/>} />
          <Route path="/y" element={<Footer/>} />
        </Routes>

        
        {/* <Footer /> */}
        
        </BrowserRouter>




    </div>
  );
}

export default App;
