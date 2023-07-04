import styled from "styled-components";

export const slider = styled.div`
  width: fit-content;
  margin: auto;
  overflow: hidden;
  background: aliceblue;
  user-select: none;
  text-align: center;
`

export const sliderBody = styled.div`
  height: 25vw;
  padding: 2vw 0;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`

export const slide = styled.div`
  overflow: hidden;
  display: flex;
`

export const Img = styled.img`
  width: 25vw;
  @media (max-width: 768px) {
    width: 50vw;
  }
`

export const Btn = styled.div`
  margin: auto 1vw;
  padding: 0.4vw;
  background: green;
  border-radius: 50%;
  cursor: pointer;
  &&: hover {
    background: red;
  }
`

export const ImgBtn = styled.img`
  width: 2.8vw;
`

export const Dots = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
`

export const Dot = styled.div`
  padding: 0.5vw;
  margin: 2px;
  background: ${props => props.theme.bg};
  border-radius: 50%;
  cursor: pointer;
`

export const Ps = styled.p`
  position: absolute;
  margin: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`