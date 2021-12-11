import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import {
  Dots,
  KeenSlider,
  NavigationWrapper,
  NumberSlide1,
  NumberSlide2,
  NumberSlide3,
  NumberSlide4,
  NumberSlide5,
  NumberSlide6,
  ProjectSection
} from "./projects.styles";
import myProjects from '../../data/projectData';
import {
  projectName
} from '../../data/projectData'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <ProjectSection>
      <section className='bg-white dark:bg-gray-800 z-50'>
        <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
          <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-right'>
            Projects
          </h1>
        </div>
        <NavigationWrapper className="navigation-wrapper flex">
          <KeenSlider ref={sliderRef} className="keen-slider">
            <NumberSlide1 className="keen-slider__slide number-slide1">
              <div class='card'>
                <div className="card-content">
                  <h2 className='card-title'>Project Name</h2>
                  <p className='card-body'>Project Details Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href='#' className='projectBtn'>View More</a>
                </div>
              </div>
            </NumberSlide1>
            <NumberSlide2 className="keen-slider__slide number-slide2">2</NumberSlide2>
            <NumberSlide3 className="keen-slider__slide number-slide3">3</NumberSlide3>
            <NumberSlide4 className="keen-slider__slide number-slide4">4</NumberSlide4>
            <NumberSlide5 className="keen-slider__slide number-slide5">5</NumberSlide5>
            <NumberSlide6 className="keen-slider__slide number-slide6">6</NumberSlide6>
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