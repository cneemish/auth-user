import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import { handleError } from "../utils";
//import Form from 'react-bootstrap/Form';

// Signup function to get signup details and handle the signup event 
function Signup(){
    const [signUpInfo, setsignUpInfo] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password:''
    }) 

    // to check the details that would be shared with backend and creating an event 
    const addDetails = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignUpInfo = { ...signUpInfo };
        copySignUpInfo[name] = value;
        setsignUpInfo(copySignUpInfo);
    };
    console.log('signUpInfo ->',signUpInfo);

    //Handle the signup event
     const handleSignup = async (e)=>{
        e.preventDefault(); //preventing the default behaviour refreshing after submission
        const {firstName, lastName, email, password} = signUpInfo;
        if(!firstName || !lastName || !email || !password){
            return handleError('Please fill all the fields');
        }
        try {
            const url = "http://localhost:3000/auth/signup";
            const response = await fetch(url,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signUpInfo)
            })
            const result = await response.json();
            console.log(result);

        } catch (error) {
            handleError(error.message);
        }

    } 
    return(    
        <div className="container">
            <h1>Signup</h1>
            <div>
            {<form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    onChange={addDetails} 
                    type="text" name="firstName" 
                    autoFocus placeholder="Please Enter Your First Name"
                    value={signUpInfo.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={addDetails} 
                    type="text" 
                    name="lastName" 
                    autoFocus placeholder="Please Enter Your Last Name"
                    value={signUpInfo.lastName}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={addDetails} 
                           type="email" name="email"
                           placeholder="Please Enter Your Email"
                           value={signUpInfo.email}  
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={addDetails}
                        type="password"
                        name="password"
                        placeholder="Please Enter Your Password"
                        value={signUpInfo.password}
                    />
                </div>
                <button type="submit"> Signup</button>
                <div>
                <span>Already have an account? <Link to="/login">Login</Link></span>
                </div>  
            </form> }
            
            <ToastContainer />
            </div>
            
        </div>
       
    )
}

export default Signup;