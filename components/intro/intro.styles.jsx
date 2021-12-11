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

export const ContactButton = styled.button`
  font-size: 1.4rem;
  display: inline;
  vertical-align: bottom;
  cursor: pointer;
  text-decoration: none;
  color: rgba(57, 255, 20, 1);
  border: rgba(57, 255, 20, 1) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  position: relative;

  text-shadow: 
    0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em rgba(57, 255, 20, 1);

  box-shadow: inset 0 0 0.5em 0 rgba(57, 255, 20, 1),
    0 0 0.5em 0 rgba(57, 255, 20, 1);

  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: rgba(57, 255, 20, 1);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: -1;
    transition-delay: 0.5s;
    transition: opacity 100ms  ease-in-out;
    box-shadow: 0 1em 0.5em rgba(57, 255, 20, 1);;
    background-color: rgba(57, 255, 20, 1);
  }

  &:hover,
  &:focus {
    color: hsl(323 1% 16%);
    background-color: rgba(57, 255, 20, 1);
    box-shadow: 0 0 50px rgba(57, 255, 20, 1);
    transition: 0.5s;
  	transition-delay: 0.5s;
    text-shadow: none;
  }

  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transition: ease-in;
    transition-delay: 0.6s;
  }

  .contactSVG {
    width: 1.2em;
    margin-bottom: 10px;
    height: 1em;
    transform: rotate(45deg);
    display: inline;
    align-self: center;
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