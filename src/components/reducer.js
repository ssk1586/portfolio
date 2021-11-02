export default (state, action) => {
    switch (action.type) {
        case 'Joined':
            return {
                ...state,
                joined: true,
                userName: action.payload.userName,
                roomId: action.payload.roomId,
            };
        
        case 'Set_Data':
            return {
                ...state,
                users: action.payload.users,
                messages: action.payload.messages,
            };
        
        case 'Set_Users':
            return {
                ...state,
                users: action.payload,
            };
        
        case 'Set_Messages':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        
        default:
            return state;
    }
};