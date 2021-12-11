import styled from "styled-components";

export const ProjectSection = styled.div`
  ${'' /* height: 120vh; */}
`;

export const NumberSlide1 = styled.div`
  
  .card {
    color: #fff;
    background-color: #111827;
    background-size: cover;
    padding: 10rem 0 0;
    max-width: 35ch;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;

    transition: transform 500ms ease;
  }

  .card-content {
    --padding: 5rem;
    padding: var(--padding);
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(20 0% 0% / 0.3) 20%,
      hsl(0 0% 0% / 1)
    );
  }

  @media (hover) {
    .card-content {
      transform: translateY(60%);
      transition: transform 500ms ease;
    }

    .card:hover .card-content,
    .card:focus-within .card-content {
      transform: translateY(0);
      transition-delay: 500ms;
    }

    .card:focus-within .card-content {
      transition-duration: 0ms;
    }

    .card-content > *:not(.card-title) {
      opacity: 0;
      transition: opacity 500ms linear;
    }

    .card:hover .card-content > *:not(.card-title),
    .card:focus-within .card-content > *:not(.card-title) {
      opacity: 1;
      transition-delay: 1000ms;
    }

    .card-title::after {
      transform: scaleX(0);
    }
  }

  .card-title {
    position: relative;
    width: max-content;

    &::after {
      content: '';
      position: absolute;
      left: calc(var(--padding) * -1);
      bottom: -2px;
      height: 4px;
      width: calc(100% + var(--padding));
      background: #84E421;
      transform-origin: left;
      transition: transform 500ms ease;
    }
  }

  .card:hover,
  .card:focus-within {
    transform: scale(1.05);
  }

  .card:hover .card-title::after,
  .card:focus-within .card-title::after {
    transform: scaleX(1);
  }

  .card-body {
    color: rgb(255 255 255 / 0.5);
    font-size: 30px;
    padding-top: 2rem;
  }

  .projectBtn {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #000;
    background-color: #84E421;
    padding: 0.005em 1em;
    border-radius: 0.25em;
    font-size: 34px;

    &:hover,
    &:focus {
      background-color: none;
    }
  }
`;

export const NumberSlide2 = styled.div`
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
`;

export const NumberSlide3 = styled.div`
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
`;

export const NumberSlide4 = styled.div`
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
`;

export const NumberSlide5 = styled.div`
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
`;

export const NumberSlide6 = styled.div`
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
`;

export const NavigationWrapper = styled.div`
  position: relative;
  width: 70vw;
  margin: auto;
  padding-bottom: 2em;

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit - transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

export const KeenSlider = styled.div`
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 60vh;
  max-height: 100vh;
`;

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }
`;

export const ProjectsContainer = styled.div`
  
`;

export const ProjectsHeading = styled.h1`
  
`;

export const ProjectMenu = styled.div`

`;

export const MenuItem = styled.div`
  
`;

export const Img = styled.img`

`;