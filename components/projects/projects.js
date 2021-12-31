import React, { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';

import { StyledButton } from '../../styles/styledbtn.styles';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Dots,
  KeenSlider,
  NavigationWrapper,
  NumberSlider,
  ProjectSection
} from "./projects.styles";

import myProjects from '../../data/projectData';
import Link from "next/link";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  // const [slides, setSlides] = useState([1])
  const numberSlides = myProjects.projects.length;
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      number: numberSlides,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const [isOpen, setIsOpen] = useState(false);
  const [tempData, setTempdata] = useState([]);

  const getData = (
    projectName,
    projectType,
    alt,
    modalImg,
    techStack,
    challenge,
    solution,
    outcome,
    viewCode,
    viewSite
  ) => {
    let tempData = [
      projectName,
      projectType,
      alt,
      modalImg,
      techStack,
      challenge,
      solution,
      outcome,
      viewCode,
      viewSite
    ];
    setTempdata(id => [1, ...tempData]);
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {
        isOpen === true ?
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-md shadow-lime-500 rounded-2xl">
                    <button onClick={closeModal} className=' cursor-pointer absolute right-5'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                    </button>
                    <div className="mt-2 lg:flex lg:flex-row lg:h-auto">
                      <img
                        src={tempData[7]}
                        className='rounded-tr-md rounded-tl-md h-54 w-full lg:h-auto lg:w-3/6 lg:rounded-bl-md lg:rounded-tr-none pt-5 lg:pt-0'
                      />
                      <div className='p-8 rounded-bl-md rounded-br-md text-white text-center lg:pt-0 lg:mx-auto'>
                        <h1 className='text-3xl'>{tempData[1]}</h1>
                        <h4 className='font-semibold text-xl mt-5'>{tempData[2]}</h4>
                        <h6 className='font-semibold text-lg my-5'>{tempData[3]}</h6>
                        <div className='h-40 overflow-y-scroll px-4'>
                          <p className='text-left my-5'>{tempData[4]}</p>
                          <p className='text-left my-5'>{tempData[5]}</p>
                          <p className='text-left my-5'>{tempData[6]}</p>
                        </div>
                        <div className='mt-10 content-evenly'>
                          <a
                            href={`${tempData[8]}`}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <StyledButton
                              className='mr-5 disabled:cursor-not-allowed'
                              disabled={tempData[8] === ''}
                            >
                              View Code
                            </StyledButton>
                          </a>
                          <a
                            href={`${tempData[9]}`}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <StyledButton className='ml-5'>
                              View Site
                            </StyledButton>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition> : ''
      }
      <ProjectSection id='projects'>
        <section className='bg-white dark:bg-gray-800 z-50'>
          <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
            <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-right'>
              Projects
            </h1>
          </div>
          <NavigationWrapper className="navigation-wrapper flex">
            <KeenSlider ref={sliderRef} className="keen-slider">
              {myProjects.projects.map((project, idx) => {
                return (
                  <NumberSlider
                    key={idx}
                    className={"keen-slider__slide"}
                  >
                    <div className='rounded-lg shadow-2xl w-4/5 lg:w-1/2 card'>
                      <div className='max-w-40 max-h-30 m-auto'>
                        <img className='backgroundImage' src={project.img} />
                      </div>
                      <div className="card-content">
                        <h2 className='card-title'>{project.projectName}</h2>
                        <p className='card-body'>{project.projectType}</p>
                        <StyledButton onClick={() => openModal(getData(project.projectName, project.projectType, project.techStack, project.challenge, project.solution, project.outcome, project.modalImg, project.viewCode, project.viewSite))} className='projectBtn'>View More&nbsp;
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </StyledButton>
                      </div>
                    </div>
                  </NumberSlider>
                )
              })}
            </KeenSlider>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </NavigationWrapper>
          {loaded && instanceRef.current && (
            <Dots className="dots">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                )
              })}
            </Dots>
          )}
        </section>
      </ProjectSection>
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


export default Projects;