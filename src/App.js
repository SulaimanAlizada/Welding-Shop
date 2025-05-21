import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import ServicePage from './Components/ServicePage.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/service' element={<ServicePage />}>
            <Route path=':serviceId' element={<ServicePage />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
