import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slide from "./components/Slide";
import img1 from "./static/images/m1d69XO_large.jpg";
import img2 from "./static/images/m1WwQjd_large.jpg";
import img3 from "./static/images/m1WwZ75_large.jpg";
import img4 from "./static/images/m2dj3a5_large.jpg";
import img5 from "./static/images/m2djy9O_large.jpg";
import img6 from "./static/images/m2djA9O_large.jpg";
import img7 from "./static/images/m2WyDM5_large.jpg";
import img8 from "./static/images/m2WyPk5_large.jpg";
import img9 from "./static/images/m2WyrrO_large.jpg";
import img10 from "./static/images/m2WywMd_large.jpg";

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

const TOTAL_SLIDES = 2;

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

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
        <Slide img={img8} />
        <Slide img={img9} />
        <Slide img={img10} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
}

export default App;
