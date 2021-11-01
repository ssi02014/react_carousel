import React, { useRef, useEffect } from "react";
import {
  EmbedRow,
  SliderRow,
  Row,
  MovieList,
  MovieItem,
  Content,
  StyledSelf,
  StyledBackground,
  Button,
} from "./style";

import image from "../../static/images/m1d69XO_large.jpg";

const Watcha = ({ currentSlide, prev, next }) => {
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <EmbedRow>
        <SliderRow>
          <Row>
            <MovieList ref={slideRef}>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
              <MovieItem>
                <Content>
                  <StyledSelf>
                    <StyledBackground
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </StyledSelf>
                </Content>
              </MovieItem>
            </MovieList>
          </Row>
        </SliderRow>
      </EmbedRow>

      <Button onClick={prev}>Previous Slide</Button>
      <Button onClick={next}>Next Slide</Button>
    </>
  );
};

export default Watcha;
