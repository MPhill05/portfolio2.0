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
  NumberSlide6
} from "./projects.styles";

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
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
        <h1 className='text-5xl md:text-9xl font-bold py-20 text-center md:text-right'>
          Projects
        </h1>
      </div>
      <NavigationWrapper className="navigation-wrapper justify-between">
        <KeenSlider ref={sliderRef} className="keen-slider">
          <NumberSlide1 className="keen-slider__slide number-slide1">1</NumberSlide1>
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
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow relative w-7 h-7 fill-current cursor-pointer ${props.left ? "arrow--left pl-0.5 object-left justify-start" : "arrow--right ml-auto pr-0.5 object-right justify-end"
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