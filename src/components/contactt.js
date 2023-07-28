import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import EmailIcon from '@mui/icons-material/Place';
import PlaceIcon from '@mui/icons-material/Place';
import CalarMonthIconend from '@mui/icons-material/CalendarMonth';
import "./contactt.css";


export default function contactt() {
  

  return (
      <Container className="example-class" style={{marginBottom:"-100px"}}>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" style={{color:"Teal",marginLeft:"-100px"}} >Contactez-Nous </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
          <p> <h3 className="color_sec py-4" style={{fontSize:"35px",marginRight:"120px",}}><strong style={{ justifyContent:"center",color:"black",marginBottom:"50px"}}>Informations</strong></h3>
            <strong style={{fontSize:"16px",color:"black",marginBottom:"200px",marginRight:"140px"}}><CalarMonthIconend/>lundi -Samedi : 00:00-23:59</strong>
            <br/>
            <strong style={{fontSize:"16px",color:"black",marginBottom:"1000px",marginRight:"140px"}}><EmailIcon/>Email: k.ourimi@elgazala.tn</strong>{" "}
            <br/>
            <strong style={{fontSize:"16px",color:"black",marginBottom:"200px",marginRight:"160px",}}><LocalPhoneSharpIcon/>Phone: (+216) 75 659 297</strong>
            <br/>
            <strong style={{fontSize:"16px",color:"black",marginBottom:"200px",marginRight:"225px",}}><PlaceIcon/>Adresse: ,Tunisie</strong>
            <br/>
            <strong style={{fontSize:"16px",color:"black",marginBottom:"200px",marginRight:"225px",}}><PlaceIcon  style={{color:"Teal"}}/><a href="https://www.google.com/maps/place/Soci%C3%A9t%C3%A9+plus+web/@33.4967197,11.1156019,17z/data=!3m1!4b1!4m6!3m5!1s0x13aaef0ab07b73a1:0xe9c90c7479ae5e74!8m2!3d33.4967197!4d11.1156019!16s%2Fg%2F11clsp9jwn?entry=ttu" style={{color:"Teal"}}>Voir Google-map</a></strong>
            </p>     
            
            
            
          </Col>
          <Col lg="7" className="d-flex align-items-center" style={{marginTop:"80px"}}>
            <form  className="contact__form w-100" >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nom" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
                style={{marginTop:"50px"}}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" style={{marginRight:"590px",marginTop:"-140px", backgroundColor:"Teal",
  
  fontSize:"20px",
  padding: "8px 50px",
  borderRadius:"5px",
  cursor:"pointer",
  }}> 
                  Envoyer
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}