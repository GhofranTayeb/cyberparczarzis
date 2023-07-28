import React from 'react'
//import Login from "../components/Login";
//import Auth from '../components/Auth';
import Login from './Login';
import Register from './Register';
//import Image from "../components/image";
export const Admin = () => {
  return (
   <div > 
    
       <div style={{width:"900px",marginLeft:"170px"}}>
       
       <Login/>
       
       </div>
       <div style={{marginLeft:"400px"}}>
       <Register/>
       </div>
       
    </div>
  )
}
export default Admin
