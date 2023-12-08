import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const AnimalDetailBox = styled.div`
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

  h3 {
    align-items: center;
    font-weight: 600;
    font-size: 36px;
  }

  li {
    text-align: left;
    margin-left: 5%;
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid #5f5f5f;
    margin-right: 5%;
    width: auto;
  }

  li:last-child {
    border: 0;
  }
`;

export const ReturnLink = styled(Link)`
  display: block;
  background: cornflowerblue;
  border-radius: 12px;
  width: 90%;
  margin: 6px auto 0;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  padding: 2px;
  box-sizing: border-box;
  transition: background 0.3s ease;
  color: azure;

  &:hover {
    background: royalblue;
  }
`;

export const BaseButton = styled.button`
    border: 0;
    outline: 0;
    font-weight: 500;
    font-size: 16px;
    border-radius: 8px;
    padding: 8px 16px;
    margin-top: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
    filter: brightness(100%);

    &:hover {
        filter: brightness(90%);
    }
`;

export const DeleteButton = styled(BaseButton)`
    flex: 1;
    background: #ff4d4d;
    color: white;
    margin-left: 3%;
    margin-right: 5%;
    &:hover {
        background: #cc0000;
    }
`;

export const UpdateButton = styled(BaseButton)`
    flex: 1;
    background: #4caf50;
    color: white;
    margin-left: 5%;
    margin-right: 3%;
    &:hover {
        background: #388e3c;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
