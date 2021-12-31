import styled from "styled-components";

export const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 20px;
  width: 100%;
  background: #001923;
`;

export const ContactContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 700px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(25px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    pointer-events: none;
    transform: skewX(-15deg);
  }

  h2 {
    text-align: center;
  }

  .contactSVG {
    width: 1.2em;
    margin-bottom: 10px;
    height: 1em;
    transform: rotate(45deg);
    display: inline;
    align-self: center;
  }

  .sendMsgBtn {
    margin: auto;
    text-align: center;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const FormRow = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const FormCol = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 20px;
  transition: 0.5s;

  .inputBox {
    position: relative;
    width: 100%;
    height: 40px;
    color: #fff;
  }

  .messageInbox {
    height: 88px;
  }

  .inputBox input,
  .inputBox textarea {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 10px;
    z-index: 1;
    color: #000;
  }

  .inputBox .text {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 40px;
    font-size: 18px;
    padding: 0 10px;
    display: block;
    transition: 0.5s;
    pointer-events: none;
  }

  .inputBox input:focus + .text,
  .inputBox input:valid + .text {
    top: -35px;
    left: -10px;
  }

  .inputBox .line {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    transition: 0.5s;
    border-radius: 2px;
    pointer-events: none;
  }

  .inputBox input:focus ~ .line,
  .inputBox input:valid ~ .line {
    height: 100%;
  }

  .inputBox textarea {
    width: 100%;
    height: 100px;
    padding: 10px 0;
    background: transparent;
    border: none;
    outline: none;
  }

  .inputBox textarea {
    height: 100%;
    resize: none;

    @media screen and (max-width: 767px) {
      width: 95%;
    }
  }

  .inputBox textarea:focus ~ .line,
  .inputBox textarea:valid ~ .line {
    height: 100%;
  }

  .inputBox textarea:focus + .text,
  .inputBox textarea:valid + .text {
    top: -35px;
    left: -10px;
  }
`;