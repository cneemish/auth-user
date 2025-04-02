import {Routes, Route, Navigate} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css'
import Signup from './components/signup';
import Home from './components/Home';
import Login from './components/login';
import RefreshHandler from './RefreshHandler';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState (false);

  const PrivateRoute = ({element}) =>{
    return isAuthenticated ? element : <Navigate to ="/login"/>
  }



  return (
    
      <div className='App'>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated}/> 
       <Routes>
        <Route path ='/' element ={<Navigate to = '/login' />}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/signup' element ={<Signup/>}/>
        <Route path ='/home' element ={<PrivateRoute element={<Home/>}/>}/>
       </Routes>
      </div>  
  );
}

export default App
