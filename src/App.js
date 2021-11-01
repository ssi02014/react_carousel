import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

import data from "./config/dummy.json";

import "./App.css";
import Watcha from "./components/watcha";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderContainer = styled.section`
  display: block;
`;

const TOTAL_SLIDES = 4;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // const image = useMemo(() => {
  //   let img = [];

  //   if (data.recommendations.length > 0) {
  //     data.recommendations.map((el) => {
  //       el.contents.map((content) => {
  //         if (content.thumbnail) {
  //           img.push(content.thumbnail.medium);
  //         }
  //       });
  //     });
  //   }
  //   return img;
  // }, []);

  return (
    <Container>
      {currentSlide}
      <SliderContainer>
        <Watcha
          currentSlide={currentSlide}
          prev={prevSlide}
          next={nextSlide}
        ></Watcha>
      </SliderContainer>
    </Container>
  );
}

export default App;
