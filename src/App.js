import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import Slide from "./components/Slide";

import data from "./config/dummy.json";

import "./App.css";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 6;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const image = useMemo(() => {
    let img = [];

    if (data.recommendations.length > 0) {
      data.recommendations.map((el) => {
        el.contents.map((content) => {
          if (content.thumbnail) {
            img.push(content.thumbnail.medium);
          }
        });
      });
    }
    return img;
  }, []);

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        {image &&
          image.map((el) => {
            return <Slide img={el} />;
          })}
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
}

export default App;
