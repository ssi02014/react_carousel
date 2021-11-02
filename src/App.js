import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

import data from "./config/dummy.json";

import "./App.css";
import Watcha from "./components/watcha";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: rgb(20, 21, 23);
`;

const SliderContainer = styled.section``;

function App() {
  const image = useMemo(() => {
    let img = [];

    if (data.recommendations.length > 0) {
      data.recommendations.forEach((el) => {
        let temp = [];
        el.contents.forEach((content, idx) => {
          if (content.thumbnail) {
            temp.push({
              url: content.thumbnail.medium,
              pointer: 0,
              key: idx,
            });
          }
        });

        temp = temp.map((el, idx) => {
          return {
            ...el,
            pointer: Math.floor(idx / 5),
          };
        });

        img = [...img, temp];
      });
    }
    return img;
  }, []);

  return (
    <Container>
      {image &&
        image.map((el, idx) => {
          return (
            <SliderContainer key={idx}>
              <Watcha image={el} />
            </SliderContainer>
          );
        })}
    </Container>
  );
}

export default App;
