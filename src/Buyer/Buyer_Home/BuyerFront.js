import React from "react";

import {HomeSpan, Container} from '../../theme/BuyerFront.elements'

import { AdCarousel } from "./Ad_Carousel/AdCarousel";



export const BuyerFront = () => {
  return (
    <HomeSpan>
      <Container>
        <AdCarousel />
        <AdCarousel />
        <AdCarousel />
      </Container>
    </HomeSpan>
  );
};
