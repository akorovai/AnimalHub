import styled from "styled-components";


export const FormBox = styled.div`
  width: 90%;
  max-width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px 0;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-weight: 600;
    font-size: 36px;
  }

  input {
    border: 0;
    outline: 0;
    background: #b0b0b0;
    color: #fff;
    margin-bottom: 8px;
    width: 90%;
    border-radius: 8px;
    padding-left: 8px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AddButton = styled.button`
    display: block;
    background: #4caf50;
    border-radius: 12px;
    width: 90%;
    margin: 6px auto 0;
    border: 0;
    outline: 0;
    font-weight: 500;
    font-size: 24px;
    text-decoration: none;
    padding: 2px;
    box-sizing: border-box;
    transition: background 0.3s ease;
    color: azure;

    &:hover {
        background: #388e3c;
    }
`;
export const ErrorText = styled.p`
  color: #f44336;
  margin-bottom: 2px;
  font-size: 10px;
  align-self: start;
  margin-left: 5%;
  margin-top: -5px;
`;
