import {
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import {Card} from "@nextui-org/react";
  import React, { useState ,useEffect} from 'react';
  import axios from 'axios';
  
  
  
  export default function App() {
    
   
  
      const [APIData, setAPIData] = useState([]);
      useEffect(() => {
          axios.get('http://localhost:8000/api/BureauxController/index')
          .then((response) => {
          setAPIData(response.data);
          })
          .catch(error => {
              console.error(error);
              // Gérer l'erreur
            });
      }, [])
  
    return (
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        <MDBCol>
        <Card isHoverable variant="bordered" css={{ mw: "400px" }} style={{height:"400px",width:"300px",marginLeft:"50px",marginTop:"50px"}}>
            <MDBCardImage
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              alt='...'
              position='top'
              
            />
            <MDBCardBody>
              <MDBCardTitle style={{marginTop:"30px"}}>Card title</MDBCardTitle>
            
              <MDBCardText style={{fontSize:"15px",marginTop:"20px"}}>
              {APIData.map((data) => {
              return (
        <p>
         Gérant:{data.Gerant}
         <br/>
         Email:{data.Email}
         <br/>
         Service:{data.Service}
         <br/>
         <a href="#" className="button"><p style={{fontSize:"13px"}}>Voir le site</p></a>
         </p> )})}
              </MDBCardText>
            </MDBCardBody>
          </Card>
        </MDBCol>
      </MDBRow>
    );
  }