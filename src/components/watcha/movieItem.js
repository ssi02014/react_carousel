import React from "react";
import {
  Item,
  Content,
  StyledSelf,
  StyledBackground,
  TitleContainer,
} from "./style";

const MovieItem = ({ image }) => {
  return (
    <>
      <Item>
        <Content>
          <StyledSelf>
            <StyledBackground style={{ backgroundImage: `url(${image})` }} />
          </StyledSelf>
          <TitleContainer>
            <div>안녕하세요</div>
          </TitleContainer>
        </Content>
      </Item>
    </>
  );
};

export default MovieItem;
