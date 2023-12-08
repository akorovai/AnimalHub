import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const ReturnButton = styled.button`
    margin-bottom: 12px;
    background: cornflowerblue;
    width: 96px;
    border: 0;
    outline: 0;
    font-weight: 500;
    font-size: 16px;
    color: azure;
    border-radius: 8px;
    transition: background 0.3s ease, box-shadow 0.3s ease;

    &:active {
        background: darkblue; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    }
`;
export const AnimalTableBox = styled.div`
    width: 90%;
    max-width: 720px;
    min-height: 360px;
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

    table {
        width: 90%;
        border-collapse: collapse;
        border-radius: 8px 8px 0 0;
        overflow: hidden;
        margin: 12px 5% 0;
    }

    table td {
        border-left: 2px solid #5f5f5f;
        border-right: 2px solid #5f5f5f;
        padding: 2px 8px;
    }

    table td:first-child {
        border-left: none;
        width: 10%;
    }

    table td:last-child {
        border-right: none;
    }

    thead th {
        background: deepskyblue;
    }

    th {
        color: #f0ffff;
        padding: 12px;
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: deepskyblue;
  }
`;