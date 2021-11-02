import styled from "styled-components/macro";

export const Input = styled.input`
    min-width: 80%;
    background: inherit;
    font-size: 14px;
    border: none;
    border-bottom: 1px solid #000000;

    &:focus {
        transform: translateY(-5px);
        border-bottom: 1px solid #F9DCD890;;
        outline: 0;
    }
`;

export const Button = styled.button`
    background-color: #F9DCD890;
    width: 174px;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 5px 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
`;

export const JoinBlockContainer = styled.div`
    min-height: 200px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    align-items: center;
    border-radius: 8px;
    padding: 15px;
    background-color: #f6f9fa;
    box-shadow: 7px 7px 8px rgba(0, 2, 3, 0.2);
`;

export const Content = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
