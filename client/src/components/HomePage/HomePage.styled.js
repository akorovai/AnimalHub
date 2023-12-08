import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export const MainBox = styled.div`
  width: 90%;
  max-width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 30px 0;
  text-align: center;
  border-radius: 12px;

  display: flex;
  align-items: center;
  flex-direction: column;

`

export const ButtonBox = styled.div`
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