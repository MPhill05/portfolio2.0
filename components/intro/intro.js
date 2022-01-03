import Image from 'next/image';
import {
  ContactButton,
  IntroContainer,
  IntroSection,
  LeftContent,
  RightContent,
  Scroller,
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
    <IntroSection id='topHome'>
      <IntroContainer>
        <RightContent>
          <Lottie
            options={defaultOptions}
          />
        </RightContent>
        <LeftContent>
          <h1 className='font-bold text-2xl sm:text-5xl'>Mark Phillips</h1>
          <Typing><SoftDevText className='text-gray-400'>Software Developer</SoftDevText><TextCursor /></Typing>
          <br />
          { }
          <Scroller
            to='contact'
            smooth={true}
            duration={1000}
            exact='true'
            offset={-80}
            spy={true}
          >
            <StyledButton className='text-sm md:text-base'>
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
          </Scroller>
        </LeftContent>
      </IntroContainer>
    </IntroSection >
  )
}

export default Intro;