import styled from "styled-components";

export const RowSection = styled.section`
  display: block;
`;

export const EmbedRow = styled.li`
  list-style: none;
`;

export const SlideRow = styled.div`
  position: relative;
`;

export const Row = styled.div`
  position: relative;
  white-space: nowrap;
  padding-left: 4%;
  padding-right: 4%;
  overflow-x: visible;
`;

export const MovieList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: 20%;
  list-style: none;
  display: inline-block;
`;

export const Content = styled.div`
  margin-bottom: 1.5625vw;
  padding: 0.15625vw;
`;

export const StyledSelf = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #0f1112;
  width: 100%;
  padding: 28.125% 0;
`;

export const StyledBackground = styled.span`
  display: inline-block;
  position: absolute;
  inset: 0px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* transition: all 420ms ease 0s; */
  padding-bottom: 4.9vw;
`;

export const ButtonAreaRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 4%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4.9vw;
`;

export const ButtonAreaLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4.9vw;
`;

export const Button = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 32px;
    padding-bottom: 0;
  }
`;

export const TitleContainer = styled.div`
  height: 3.125vw;
  margin-top: 0.234375vw;
  color: #fff;
`;
