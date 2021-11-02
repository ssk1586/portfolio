import React from 'react';
import { useEffect, useState, useRef } from 'react';
import socket from '../../socket';

import { RiSendPlaneFill } from "react-icons/ri";
import {
  ChatComponent,
  Users,
  OnlineUsers,
  ChatMessages,
  Messages,
  Message,
  Text,
  Span,
  ListUl,
  ListLi,
  Form,
  TextArea,
} from './Chat.styled.jsx';

function Chat({users, messages, userName, roomId, onAddMessage}) {

  const [messageValue, setMessageValue] = useState('');
  const MessageRef = useRef(null);
    
  const onSendMessage = () => {
    socket.emit('room: new_message', {
      userName,
      roomId,
      text: messageValue,
    });

    onAddMessage({ userName, text: messageValue, });
    setMessageValue('');
  };

  useEffect(() => {
    MessageRef.current.scrollTo(0, 99999);
  }, [messages]);
  
  return (
    <ChatComponent>
      <Users>
        <OnlineUsers>
          <b>Online ({users.length}): </b>
        </OnlineUsers>
        
        <ListUl>
             {users.map((name, index) => (
            <ListLi key={name + index}>{name}</ListLi>
          ))}          
        </ListUl>
      </Users>
      <ChatMessages>
        <Messages ref={MessageRef}>
            {messages.map((message) => (
              <Message>
              <Text>{ message.text }</Text>
              <div>
                <Span>{ message.userName }</Span>
              </div>
            </Message>
            ))}
          </Messages>
        <Form>
          <TextArea
            placeholder='Write a message...'
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            ></TextArea>
          <RiSendPlaneFill onClick={onSendMessage} size={27} style={{cursor: 'pointer'} }/>
        </Form>
      </ChatMessages>
    </ChatComponent>
  );
}

export default Chat
