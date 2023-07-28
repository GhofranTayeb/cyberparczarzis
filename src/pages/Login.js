import React from 'react'
import { useState } from "react";
//import AuthUser from './AuthUser';
//import Image from "../components/image";
export default function Login() {
    
    return(
        <div className="row justify-content-center pt-5" >
            <div className="col-sm-6" >
                <div className="card p-4">
                    
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                       
                        <label style={{fontSize:"20px",marginRight:"400px"}}>Email:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label style={{fontSize:"20px",marginRight:"500px"}}>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                        id="pwd" />
                    </div>
                    <button type="button" className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}