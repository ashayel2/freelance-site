import React from 'react'
import Carousel from 'styled-components-carousel'




export const AdCarousel = () => {
    return (
        <Carousel
            center
            infinite
            showArrows
            ShowIndicator
            slidesToShow={3}
        >
            <div>
                <span>1</span>
            </div>
            <div>
                <span>2</span>
            </div>
            <div>
                <span>3</span>
            </div>
            <div>
                <span>4</span>
            </div>
        </Carousel>
    )
}
