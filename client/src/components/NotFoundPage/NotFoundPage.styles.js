import styled from "styled-components";
import winterRoadBackground from "./files/winter-road-background.jpg";

export const NotFoundContainer = styled.div`
  background-image: url(${winterRoadBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: cornflowerblue;
    margin-top: -72px;
    opacity: 0.8;
    font-size: 18px;
  }

  h3 {
    color: cornflowerblue;
    font-size: 224px;
    font-weight: 600;
    opacity: 0.6;
  }
`;