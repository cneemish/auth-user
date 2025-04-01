import React, { useState } from "react";
import { Form, Link, useNavigate} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from "../utils";

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    })

    const addDetailsLogin = (e) =>{
        const {name, value} = e.target;
        console.log(name, value);
        const copyLoginInfo = {...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    console.log('loginInfo ->',loginInfo);


    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        const {email, password} = loginInfo;
        if(!email || !password){
            return handleError('Please fill all the fields');
        }
        try {
            const url = "http://localhost:3000/auth/login";
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
            const result = await response.json();
            const { success, message, error } = result;
            if (success){
                            handleSuccess(message);
                           setTimeout (() =>{ 
                            navigate('/home');
                           }, 1000)
                        } else if (error){
                            const details = error?.details[0].message; // getting error returned from the api call 
                            handleError(details);
                        } else if (!success){
                            handleError(message);
                        }

        } catch (error) {
                        handleError(error.message);
            
        }

    }
    return(
    <div className="container"> 
        <h1>Login</h1>
        <div>
        {<form onSubmit={handleLogin}>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={addDetailsLogin}
                type="email" name="email"
                autoFocus placeholder="Please Enter Your Email"
                value={loginInfo.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={addDetailsLogin}
                type="password" name="password"
                autoFocus placeholder="Please Enter Your Password"
                value={loginInfo.password}
                />
            </div>
            <button type="submit">Login</button>   
            <div>
            <span>Don't have an account? <Link to="/signup">Sign Up!</Link></span>  
            </div>

        </form>}
        <ToastContainer />
    </div>   
</div>
    )
}

export default Login;