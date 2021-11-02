import React, { useRef, useEffect, useState } from "react";
import {
  EmbedRow,
  Row,
  SlideRow,
  MovieList,
  Button,
  ButtonAreaRight,
  ButtonAreaLeft,
} from "./style";

import MovieItem from "./movieItem";
const TOTAL_SLIDES = Math.floor(18 / 5);

const Watcha = ({ id, image }) => {
  const slideRef = useRef(null);
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

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <EmbedRow>
      <SlideRow>
        <Row>
          <MovieList ref={slideRef} id={id}>
            {image &&
              image.map((el, idx) => {
                return <MovieItem image={el} key={idx}></MovieItem>;
              })}
          </MovieList>
        </Row>
        <ButtonAreaRight>
          <Button onClick={nextSlide}>
            <span>{">"}</span>
          </Button>
        </ButtonAreaRight>

        {currentSlide !== null && (
          <ButtonAreaLeft>
            <Button onClick={prevSlide}>
              <span>{"<"}</span>
            </Button>
          </ButtonAreaLeft>
        )}
      </SlideRow>
    </EmbedRow>
  );
};

export default Watcha;
