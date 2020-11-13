import styled from 'styled-components'


export const HomeSpan = styled.div`
  background: black;
  color: ${(props) => props.theme.colors.ghost};
  height: 100vh;
  display: flex;
  /* grid-template-areas: "div div";
  grid-template-rows: "2fr 8fr"; */

  flex-flow: row nowrap ;
  justify-content: right;
  align-items: right;
  /* font-size: 1.2 rem; */
  position: right;
  top: 0;
  z-index: 1;
`;
export const Spacing = styled.div`
  display: flex;
  height: 100vh;
  width: 20vw;
`


export const Container = styled.div`
  background: ${(props) => props.theme.colors.crayola};
  display: flex;
  flex-flow: column nowrap;
  /* border-top: 5px solid black; */
  border-right: 5px solid black;
  align-items: right;
  height: 100vh;
  width: 79vw;
`;