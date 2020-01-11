import React, { useState, useEffect } from 'react';
import ImageSlide from './image_slide'
import Arrow from './arrow'
import { CSSTransition } from "react-transition-group";

const Carousel = () => {
    const imgUrls = [
      "https://live.staticflickr.com/65535/49220313732_6c98051f80_b.jpg",
        "https://live.staticflickr.com/65535/48539386741_704564729e_b.jpg",
        "https://live.staticflickr.com/65535/49219621673_97e00f33de_b.jpg",
        "https://live.staticflickr.com/65535/49219605933_6b57a3b667_b.jpg",
        ];
    const [currentImgIdx, setIdx] = useState(0)
    const [showCarousel, setCarousel] = useState(false)

     useEffect(() => {
       setTimeout(setCarousel(true), 2000);
     }, []);

    const previousSlide = () => {
        const last = imgUrls.length - 1;
        const shouldReset = currentImgIdx === 0;
        const index = shouldReset ? last : currentImgIdx - 1

        setIdx(index)
    }

    const nextSlide = () => {
        const last = imgUrls.length - 1;
        const shouldReset = currentImgIdx === last;
        const index = shouldReset ? 0 : currentImgIdx + 1

        setIdx(index)
    }

        return (
          <div className="container">
            <CSSTransition
              in={showCarousel}
              timeout={4000}
              classNames="header-transition"
              appear
            >
              <div className="carousel">
                <Arrow
                  direction="left"
                  clickFunction={previousSlide}
                  glyph="&#9664;"
                />

                <ImageSlide url={imgUrls[currentImgIdx]} />

                <Arrow
                  direction="right"
                  clickFunction={nextSlide}
                  glyph="&#9654;"
                />
              </div>
            </CSSTransition>
          </div>
        );
}

export default Carousel;