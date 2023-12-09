// ButtonBox.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonBox = styled.div`
    background: cornflowerblue;
    border-radius: 8px;
    margin-bottom: 6px;
    width: 200px;
    height: 32px;
    
    & > a {
        color: #f0ffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        transition: background 0.3s ease, box-shadow 0.3s ease;
    }

    &:hover {
        background: royalblue;
    }
`;

const ButtonBox = ({ to, children }) => {
    return (
        <StyledButtonBox>
            <Link to={to}>{children}</Link>
        </StyledButtonBox>
    );
};

export default ButtonBox;
