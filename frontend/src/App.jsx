import {Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import './App.css'
import Signup from './components/signup';
import Home from './components/home';
import Login from './components/login';

function App() {

  return (
    
      <div className='App'>
       <Routes>
        <Route path ='/' element ={<Navigate to = '/login' />}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/signup' element ={<Signup/>}/>
        <Route path ='/home' element ={<Home/>}/>
       </Routes>
      </div>
      
   
  )
}

export default App
