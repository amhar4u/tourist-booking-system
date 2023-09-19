import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/nav';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Home from './pages/home';
import Booking from './pages/booking';

 function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav/>}/>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="booking" element={<Booking/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}
export default App;
