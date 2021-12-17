import Image from 'next/image';
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { StyledButton } from '../../styles/styledbtn.styles';
import "keen-slider/keen-slider.min.css";
import {
  Dots,
  KeenSlider,
  NavigationWrapper,
  NumberSlider,
  ProjectSection
} from "./projects.styles";
import myProjects from '../../data/projectData';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slides, setSlides] = useState([1])
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

  return (
    <ProjectSection id='projects'>
      <section className='bg-white dark:bg-gray-800 z-50'>
        <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
          <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-right'>
            Projects
          </h1>
        </div>
        <NavigationWrapper className="navigation-wrapper flex">
          <KeenSlider ref={sliderRef} className="keen-slider">
            {myProjects.projects.map((project) => {
              return (
                <NumberSlider
                  key={project.id}
                  className={"keen-slider__slide"}
                >
                  <div className='rounded-lg shadow-2xl w-1/2 card'>
                    <img className='backgroundImage' src={project.img} />
                    <div className="card-content">
                      <h2 className='card-title'>{project.projectName}</h2>
                      <p className='card-body'>{project.projectType}</p>
                      <StyledButton href='#' className='projectBtn'>View More&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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