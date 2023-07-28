import React from "react";

//import ReactDOM from "react-dom";
//import ImageComponent from "./ImageComponent";
//import App from './App'
//import './index.css'
//import Card from "../components/Card";
import ImageChangeOnScroll from "./slider"
import ImageGallery from './ImageGallery';
import Fonctions from "./Fonctions";
import App from "./foter";
export const Accueil = () => {
  return (
    <div >
  
     <ImageChangeOnScroll/>
      <div>
        <h1 style={{marginTop:"50px",fontSize:"60px"}}> A PROPOS </h1>
        <h5 style={{ marginTop:"40px", color:"black"}}>Le Cyber-Parc est un espace aménagé,équipé de réseaux modernes d'information et de communiction.</h5>
        <h6 style={{marginTop:"20px", fontSize:"0.2em" , color:"black"}}>Adresse : Blvd De I'environment، BP N°474، Houmt Souk 4180
          <br/>
Horaires : Ouvert 24h/24
<br/>
Téléphone : 75 659 297</h6>
<br/>
</div>
<div Style={{ marginTop:"80px"}}>
<Fonctions/>
<br/>
</div>
<br/>
 <div
 style={{  border:"2px solid black",
  outline:"Teal solid 10px",
  margin:"auto",  
  padding:"20px",
  textalign:"center",
  height:"600px",
  backgroundColor:"#F4F6F6"}}> <h1 style={{ marginTop:"20px", fontSize:"60px",}}> SERVICE</h1> 
  <h5>Nos Services</h5>
 <ImageGallery />
 </div>
 <App/>
    </div>
    
  );
}
export default Accueil;