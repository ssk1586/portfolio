import styled from "styled-components";

export const ChatComponent = styled.div`
    display: flex;
    height: 500px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 10px 10px 8px #00000020;
`;
export const OnlineUsers = styled.div`
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const Users = styled.div`
    border-right: 1px solid rgba(159, 183, 197, 0.1);
    padding: 20px;
    min-width: 200px;
    background-color: #f6f9fa;
`;

export const ChatMessages = styled.div`
    min-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 20px;
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: calc(100% - 155px);
    overflow: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-corner{
        width: 0px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #B3B3B350 ;
    }
`;

export const Message = styled.div`
    margin-bottom: 20px;
`;

export const Text = styled.p`
    display: inline-flex;
    border-radius: 8px;
    background-color: #F9DCD890;
    padding: 5px 10px 10px;
    color: black;
    margin-bottom: 2px;
    font-size: 14px;
`;

export const Span = styled.span`
    opacity: 0.5;
    font-size: 12px;
`;

export const ListUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListLi = styled.li`
    margin-top: 10px;
    border-radius: 3px;
    background-color: white;
    padding: 8px 14px;
    box-shadow: 5px 5px 8px rgba(159, 183, 197, 0.4);
    font-weight: 500;
    font-size: 14px;
`;

export const Form = styled.form`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextArea = styled.textarea`
    margin-right: 10px;
    width: 100%;
    resize: none;
    outline: none;
    border-radius:5px;
    border:0;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-corner{
        width: 0px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #B3B3B350 ;
    }
`;
