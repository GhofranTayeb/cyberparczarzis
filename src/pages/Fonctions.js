import {
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import {Card} from "@nextui-org/react";
  import React from 'react';

  
  
  
  export default function Fonctions() {
    
   
  
    
  
    return (
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        <MDBCol>
      <Card isHoverable variant="bordered" css={{ mw: "400px" }} style={{height:"520px",width:"400px",marginLeft:"300px",marginTop:"-20px"}}>
            <MDBCardImage
              src='http://einfo.tn/cyberparcdjerba/img/about2.jpg'
              alt='...'
              position='top'
              style={{width:"400px",height:"200px"}}
            />
            <MDBCardBody style={{backgroundColor:"teal"}}>
              <MDBCardTitle style={{marginTop:"30px"}}>Fonctions</MDBCardTitle>
            
              <MDBCardText style={{fontSize:"15px",marginTop:"15px"}}>
  
        <p>
        L'objectif du CYBER-PRC est d'offrir des espaces fonctionnels,avec des équipements et des réseaux de communications modernes et spécialisés,pour accueillir les promoteurs qui désirent monter des projets de services,basés sur les nouvelles technologirs de l'information et de la communication.
        Ces services sont orientés vers les organismes économiques et administratifs implantés dans la région,ou dans d'autres endroits du pays,ou à l'étranger,sous forme de services à distance.
        </p> 
    
        
        
              </MDBCardText>
            </MDBCardBody>
          </Card>   
          <Card isHoverable variant="bordered" css={{ mw: "1000px" }} style={{height:"520px",width:"400px",marginLeft:"800px",marginTop:"-520px"}}>
            <MDBCardImage
              src='http://einfo.tn/cyberparcdjerba/img/about3.jpg'
              alt='...'
              position='top'
              style={{width:"400px",height:"200px"}}
            />
            <MDBCardBody style={{backgroundColor:"teal"}}>
              <MDBCardTitle style={{marginTop:"30px"}}>Domaines d'activité</MDBCardTitle>
            
              <MDBCardText style={{fontSize:"15px",marginTop:"15px"}}>
  
        <p>
        - Centre d'appels
        <br/>
        - Développements logiciels
        <br/>
        - Services à distance en relation avec le TIC
        <br/>
        - Développements et mis à jour des sites Web
        <br/>
        - Hébergement des pépinieres d'entreprises
        <br/>
        - Reservation des espaces équipés pour le travail à distance pour les   personnes se trouvant dans une situation de mobilité permanente
        <br/>
        - Des services diversifiés basés sur des techniques de communication
         </p> 
    
        
        
              </MDBCardText>
            </MDBCardBody>
          </Card>   
        </MDBCol>
      </MDBRow>
    );
  }