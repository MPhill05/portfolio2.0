import styled from "styled-components";

export const IntroSection = styled.div`
  padding-top: 30vh;
  width: 60vw;
  height: 90vh;
  position: relative;
  margin: auto;

  @media screen and (max-width: 767px) {
    padding-top: 250px;
  }
`;

export const IntroContainer = styled.div`
  position: relative;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    ${'' /* grid-auto-columns: auto;
    grid-template-areas: none;
    grid-auto-flow: row; */}
    display: inline-block;
  }
`;

export const LeftContent = styled.div`
  height: 100%;
  margin-top: 20vh;
  float: left;
  width: 40vw;
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

 .contactSVG {
    transform: rotate(45deg);
  }

  grid-area: col1;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    display: block;
    float: none;
    width: 100%;
    text-align: center;
  }
`;

export const Typing = styled.div`
  height: 35px;
  white-space: nowrap;
  font-family: 'Source Code Pro', monospace;  
  ${'' /* font-size: 28px; */}
  position: relative;

  animation: animated-text 2s steps(30,end) 1s 1 normal both;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 180px;}
  }

  @media screen and (max-width: 767px) {
    margin: auto;
  }
`;

export const SoftDevText = styled.h3`
  overflow: hidden;
`;

export const TextCursor = styled.div`
  border-bottom: solid 3px rgba(0,255,0,.75);
  position: absolute;
  right: -10px;
  width: 15px;

  animation: animated-cursor 600ms steps(30,end) infinite;

  @keyframes animated-cursor {
    from {border-bottom-color: rgba(57, 255, 20, 1);}
    to {border-bottom-color: transparent;}
  }
`;

export const RightContent = styled.div`
  margin-top: 10vh;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding: 0;
    display: block;
    float: none;
    width: 100%;
    margin: auto;

    .Lottie {
    }
`;

export const LearnMore = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const LearnMoreButton = styled.button`
  margin:0 auto;
  display:block;
`;