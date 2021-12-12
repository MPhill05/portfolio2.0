import styled from "styled-components";

export const IntroSection = styled.div`
  padding-top: 20vh;
  width: 60vw;
  height: 80vh;
  position: relative;
  margin: auto;
`;

export const IntroContainer = styled.div`
  position: relative;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
`;

export const LeftContent = styled.div`
  height: 100%;
  margin-top: 20vh;
  float: left;
  width: 20vw;
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

 .contactSVG {
    transform: rotate(45deg);
  }
`;

export const Typing = styled.div`
  height: 35px;
  white-space: nowrap;
  font-family: 'Source Code Pro', monospace;  
  font-size: 28px;
  position: relative;

  animation: animated-text 2s steps(30,end) 1s 1 normal both;

  @keyframes animated-text{
    from{width: 0;}
    to{width: 320px;}
  }
`;

export const SoftDevText = styled.h3`
  overflow: hidden;
`;

export const TextCursor = styled.div`
  border-bottom: solid 3px rgba(0,255,0,.75);
  position: absolute;
  right: -10px;
  width: 20px;

  animation: animated-cursor 600ms steps(30,end) infinite;

  @keyframes animated-cursor {
    from {border-bottom-color: rgba(57, 255, 20, 1);}
    to {border-bottom-color: transparent;}
  }
`;

export const RightContent = styled.div`
  margin-top: 10vh;
  padding-left: 150px;
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