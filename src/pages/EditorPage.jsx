import React, { useState, useRef,useEffect } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';
import Codeeditor from "../Assets/codeeditor.png"
import { initSocket } from '../socket';
import ACTIONS from '../Actions';
import { useLocation } from 'react-router-dom';

const EditorPage =()=>
{
    const socketRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
       const init = async() =>{
           socketRef.current = await initSocket();
        //    socketRef.current.emit(ACTIONS.JOIN,{
        //        roomId,
        //        username:location.state?.username,
        //    });
       };
       init();
    }, []);

    const [clients,setClients]=useState([{socketId: 1, username: 'Vipul'}
    ]);
    return (
    <div className='mainWrap'>
    <div className='aside'>
    <div className='aside Inner'>
        <div className='logo'>
            <img className='logoImage' src={Codeeditor} alt='logo'/>
        </div>
        <h3>Connected</h3>
        <div className='clientsList'>
        {
            clients.map((client=><Client key={client.socketId} username={client.username}/>))
        }

 </div>
        </div >
        
        <button className='btn copyBtn'>Copy Room ID</button>
        <button className='btn leaveBtn'>Leave</button>
    </div>
    <div className='editorwrap'>
    <Editor/>
    </div>
    
    </div>
    );
};
export default EditorPage;