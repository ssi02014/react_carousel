import styled from "styled-components";

export const RowSection = styled.section`
  display: block;
`;

export const EmbedRow = styled.li`
  list-style: none;
`;

export const SliderRow = styled.div``;

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

export const MovieItem = styled.li`
  width: 20%;
  list-style: none;
  display: inline-block;
`;

export const Content = styled.div`
  margin-bottom: 1.5625vw;
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
  transition: all 420ms ease 0s;
`;

export const Button = styled.button`
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
