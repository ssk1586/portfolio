import React from "react";

import socket from "./socket";
import { useEffect } from "react";

import JoinBlock from "./components/JoinBlock/JoinBlock";
import reducer from './components/reducer';

import { Content } from "./components/JoinBlock/JoinBlock.styled";
import "./App.css"
import Chat from "./components/ChatBlock/Chat";
import axios from "axios";



function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  })

  const onLogin = async (obj) => {
    dispatch({
      type: 'Joined',
      payload: obj,
    });

    socket.emit('room: join', obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({
      type: 'Set_Data',
      payload: data,
    });
  };
  
  const setUsers = (users) => {
    dispatch({
      type: "Set_Users",
      payload: users,
    });
  };

  const addMessage = (message) => {
    dispatch({
      type: "Set_Messages",
      payload: message,
    });
  };

  useEffect(() =>  {
    socket.on('room: set_users', setUsers);
    socket.on('room: new_message', addMessage);
  }, []);

  return (
    <Content>
      {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat {...state} onAddMessage={addMessage}/>}
    </Content>
  );
}

export default App;
