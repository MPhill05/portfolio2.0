import Image from 'next/image';
import {
  ContactButton,
  IntroContainer,
  IntroSection,
  LeftContent,
  RightContent,
  SoftDevText,
  TextCursor,
  Typing
} from "./intro.styles";
import { StyledButton } from '../../styles/styledbtn.styles';
import Lottie from 'react-lottie';
import * as animationData from '../../public/static/programming-computer.json';

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <IntroSection>
      <IntroContainer>
        <LeftContent>
          <h1>Mark Phillips</h1>
          <Typing><SoftDevText className='text-gray-400'>Software Developer</SoftDevText><TextCursor /></Typing>
          <br />
          { }
          <a href='/#contact'>
            <StyledButton>
              Contact Me&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="contactSVG w-5 h-4 inline mb-2"
                fill="none"
                viewBox="0 0 22 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </StyledButton>
          </a>
        </LeftContent>
        <RightContent>
          <Lottie options={defaultOptions}
            height='50vh'
            width='40vw'
          />
        </RightContent>
      </IntroContainer>
    </IntroSection>
  )
}

export default Intro;