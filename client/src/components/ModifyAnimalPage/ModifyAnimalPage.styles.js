import styled from "styled-components";

export const ModifyBox = styled.div`
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
`