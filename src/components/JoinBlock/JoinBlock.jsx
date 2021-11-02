import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import {
    JoinBlockContainer,
    Button,
    Input,
} from "./JoinBlock.styled";


function JoinBlock({onLogin}) {

    const [userName, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');
    const [isLoading, setLoding] = useState(false);

    const OnButtonClick = async () => {
        if (userName === '' || roomId === '') { //or (!userName || !roomId)
            return alert("Заповніть пусті поля");
        }
        const obj = {
            userName,
            roomId,
        };
        setLoding(true);
        await axios.post('/rooms', obj);
        onLogin(obj);  
    };

    return (
        <JoinBlockContainer> 
            <Input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => { setRoomId(e.target.value) }}
            />
            <Input
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => { setUserId(e.target.value) }}
            />
            <Button
                disabled={isLoading}
                onClick={OnButtonClick}>
                {isLoading ? "...Вхід" : "Ввійти"}
            </Button>
        </JoinBlockContainer>
    )
}

export default JoinBlock;
