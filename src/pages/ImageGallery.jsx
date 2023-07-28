import React from 'react';



const ImageGallery = () => {
  return (
    <div>
    <div style={{width:"80%", minWidth:"400px", maxWidth:"800px",margin:"0 auto", marginTop:"60px" }}>
      
     < img  src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' style={{width:"30% ", padding:"50px"}} />
     
     <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' style={{width:"30%" , padding:"50px"}}/>
     <img  src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'  style={{width:"30%" , padding:"50px"}}/>
     
      </div>
     </div> 
  );
};

export default ImageGallery;