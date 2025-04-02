import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedInUser, setLoggedInuser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Corrected localStorage.getItem usage
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInuser(user);
    }
  }, []); // Empty dependency array, as there are no dependencies
  const handleLogout = (e) =>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess ('Logged out!');
    setTimeout(()=>{
        navigate('/login')
    },1000)
  }


  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  const editor = useState(() => withReact(createEditor()))[0]; // Extract editor from useState

  return (
    <div className='home-container'>
    <header className='home-header'>
    <h2>Welcome {loggedInUser}</h2>
    <nav>
    <button onClick={handleLogout} >Logout</button>
    </nav>
    </header>
    <div className="editor-container">
      <h1>Slate Editor</h1>
      
      <Slate editor={editor} initialValue={initialValue}>
        <Editable
            onKeyDown={event =>{
                console.log(event.key)
            }} />
      </Slate>
    </div>
            <ToastContainer />
    </div>
  );
}

export default Home;