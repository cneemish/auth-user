import React from "react";
import { Form, Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
//import Form from 'react-bootstrap/Form';

function Signup(){
    const addDetails = (e) =>{
        const {name, value} = e.target;
        console.log(name, value); }
    
    return(
        <div className="container">
            <h1>Signup</h1>
            {<form >
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={addDetails} type="text" name="name" autoFocus placeholder="Please Enter Your Name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={addDetails} type="email" name="email"  placeholder="Please Enter Your Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={addDetails}type="password" name="password"  placeholder="Please Enter Your Password"/>
                </div>
                <button>Signup</button>
                <div>
                <span>Already have an account? <Link to="/login">Login</Link></span>
                </div>  
            </form> }
            
            <ToastContainer />
            
        </div>
    
    )
}

export default Signup;