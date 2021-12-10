import Image from 'next/image';
import {
  ContactButton,
  IntroContainer,
  IntroSection,
  LearnMore,
  LearnMoreButton,
  LeftContent,
  RightContent,
  TextCursor,
  Typing
} from "./intro.styles";
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
          <Typing className='text-gray-600'>Software Developer<TextCursor /></Typing>
          <br />
          { }
          <ContactButton>
            Contact Me <svg xmlns="http://www.w3.org/2000/svg" className="contactSVG " fill="none" viewBox="0 0 22 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </ContactButton>
        </LeftContent>
        <RightContent>
          <Lottie options={defaultOptions}
            height='50vh'
            width='30vw'
          />
        </RightContent>
      </IntroContainer>
      <LearnMore>
        <LearnMoreButton>
          <Image
            src='/static/arrow_downward.svg'
            alt='Play Icon'
            width='36px'
            height='36px'
          />
        </LearnMoreButton>
      </LearnMore>
    </IntroSection>
  )
}

export default Intro;