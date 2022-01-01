import Image from 'next/image';
import { StyledButton } from '../../styles/styledbtn.styles';

const About = () => {
  return (
    <section className='bg-white dark:bg-gray-800' id='about'>
      <div className='max-w-full lg:max-w-6xl mx-auto h-48 pb-10 bg-white dark:bg-gray-800'>
        <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
          About Me
        </h1>
      </div>
      <div className='flex flex-row flex-wrap pb-10 bg-gray-800 -mt-20 md:-mt-10 dark:bg-gray-900'>
        <div className='w-1/4 mt-12 md:mt-24 ml-1 md:ml-auto'>
          <img
            src='/static/laptop.webp'
            className='h-200 w-200 mx-auto my-4'
          />
        </div>
        <div className='md:w-1/2 w-8/12 mt-12 md:mt-24 mr-1 md:mr-auto col-span-1 md:col-span-2'>
          <p className='text-xl justify-start space-x-4 text-gray-300 mb-4 dark:text-gray-300 md:text-center'>
            Hi! I'm Mark Phillips, a self-taught Full-Stack Web Developer proficient in JavaScript, various frameworks and libraries.
            <br />
            <br />
            I have experience working as a freelance developer, working directly with customers to create web applications with over 10,000 active users and consistently delivering quality work.
          </p>
          <StyledButton
            className='mb-20 mt-20 m-auto md:mb-0 px-8 py-2 text-3xl flex flex-row items-center'>
            Resume&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </StyledButton>
        </div>
      </div>
    </section>
  )
}

export default About;