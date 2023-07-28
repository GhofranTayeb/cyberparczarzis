import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
//import AuthUser from './AuthUser';

export default function Register() {
    

    return(
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4" >
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label style={{fontSize:"20px",marginRight:"600px"}}>Nom:</label>
                        <input type="test" className="form-control" placeholder="Enter name"

                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label style={{fontSize:"20px",marginRight:"400px"}}>Email:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label style={{fontSize:"20px",marginRight:"600px"}}>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <button type="button" className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}