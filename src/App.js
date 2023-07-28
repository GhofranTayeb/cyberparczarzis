import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Heberger } from "./pages/Heberger";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
//import Footer from "./components/Footer";

function App() {
  return (
    
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Heberger" element={<Heberger />} />
           <Route path="/Contact" element={<Contact />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/S" element={<Admin />} />
          </Routes>
         
        </div>
      
      <app/>
      </Router>
     
  
  );
}

export default App;