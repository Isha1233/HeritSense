import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home/Home";
import  About  from "./pages/About";
import { Contact } from "./pages/Contact";
import  Service  from "./pages/Service";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout"; 
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import Profile from './pages/Profile';
import ForgoPassword from "./pages/ForgoPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="  " >
       <section  className=" justify-center"
      style={{
          backgroundImage: "url('/f7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed", // This will fix the background image
          minHeight: "84vh", // Ensure the section covers the entire viewport height
      }}
  >
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<Error/>}/>
         <Route path=" /ForgoPassword" element={<ForgoPassword />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
