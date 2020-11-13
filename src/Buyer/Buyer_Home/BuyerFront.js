import React from "react";

import {HomeSpan, Container,Spacing} from '../../theme/BuyerFront.elements'

import { AdCarousel } from "./Ad_Carousel/AdCarousel";



export const BuyerFront = () => {
  return (
    <HomeSpan>
      <Spacing />
      <Container>
        <AdCarousel />
        <AdCarousel />
        <AdCarousel />
      </Container>
    </HomeSpan>
  );
};
