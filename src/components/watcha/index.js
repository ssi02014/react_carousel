import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  EmbedRow,
  Row,
  SlideRow,
  MovieList,
  Button,
  ButtonAreaRight,
  ButtonAreaLeft,
} from "./style";
import _ from "lodash";
import MovieItem from "./movieItem";
const TOTAL_SLIDES = 3;

const Watcha = ({ id, image }) => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageItem, setImageItem] = useState([]);
  const [transformItem, setTransformItem] = useState([]);

  const nextSlide = () => {
    const direction = 1;
    animation(direction);
    setTimeout(() => {
      transformNextImage(currentSlide, direction);
      offAnimation();
    }, 1000);
  };
  const item = useMemo(() => {
    if (image) {
      const component = image.map((el) => {
        return <MovieItem image={el.url} key={el.key}></MovieItem>;
      });
      setImageItem(component);
      return component;
    } else {
      setImageItem([]);
      return [];
    }
  }, [image]);

  const prevSlide = () => {
    const direction = -1;
    animation(direction);
    setTimeout(() => {
      transformNextImage(currentSlide, direction);
      offAnimation();
    }, 1000);
  };

  // const transformImage = useCallback(
  //   (current, direction) => {
  //     let img = _.cloneDeep(imageItem);

  //     console.log(current);

  //     if (direction === 1) {
  //       const splitImg = img.filter((el) => el.pointer === current);
  //       img.splice(0, splitImg.length);
  //       img = [...img, ...splitImg];
  //     }

  //     // else if (direction === -1) {
  //     //   const splitImg = img.filter((el) => el.pointer !== current);

  //     //   img.splice(0, img.length - splitImg.length);
  //     //   img = [...splitImg, ...img];
  //     // }

  //     setImageItem(img);
  //   },
  //   [imageItem]
  // );

  const transformNextImage = (current, direction) => {
    const init = imageItem;
    // const transforms = [...init];
    const indexList = item.map((v, i) => i);

    if (direction === 1) {
      indexList.push(...indexList.splice(0, 5));
    } else {
      indexList.push(...indexList.splice(6, indexList.length));
    }

    console.log(indexList);

    const newItem = indexList.map((v, i) => {
      return imageItem[v];
    });

    setImageItem(newItem);
    // const splitImg = init.filter((el) => el.pointer === current);
    // transforms.splice(0, splitImg.length);
    // transforms.push(...splitImg);

    // setTransformItem(transforms);
  };

  const animation = (direction = 1) => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(${100 * -direction}%)`;
  };

  const offAnimation = () => {
    slideRef.current.style.transition = "none";
    slideRef.current.style.transform = `translateX(0%)`;
  };

  return (
    <EmbedRow>
      <SlideRow>
        <Row>
          <MovieList ref={slideRef} id={id}>
            {imageItem.map((el, idx) => {
              return;
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
