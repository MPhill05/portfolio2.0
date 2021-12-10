import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-white dark:bg-gray-800' id='aboutSection'>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
        <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
          About Me
        </h1>
      </div>
      <div className='flex flex-row flex-wrap bg-gray-800 -mt-10 dark:bg-gray-900'>
        <div className='w-1/4 mt-8 ml-auto'>
          <img
            src='/static/laptop.webp'
            className='h-200 w-200 mx-auto my-4'
          />
        </div>
        <div className='w-1/2 mt-36 mr-auto col-span-1 md:col-span-2'>
          <p className='text-xl justify-start space-x-4 text-gray-700 mb-4 dark:text-gray-300 md:text-center'>
            Hi! I'm Mark Phillips, a self-taught Full-Stack Web Developer proficient in JavaScript, various frameworks and libraries.
            <br />
            <br />
            I have experience working as a freelance developer, working directly with customers to create web applications with over 10,000 active users and consistently delivering quality work.
          </p>
          <button
            className='mb-20 md:mb-0 px-8 py-2 text-3xl rounded-md shadow-lg font-semibold flex flex-row items-center bg-green-600 text-gray-50'>
            Resume
            <Image
              src='/static/resume.svg'
              alt='Play Icon'
              width='36px'
              height='36px'
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default About;