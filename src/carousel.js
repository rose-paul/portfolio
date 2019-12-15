import React, { useState } from 'react';
import ImageSlide from './image_slide'
import Arrow from './arrow'

const Carousel = () => {
    const imgUrls = [
        "https://live.staticflickr.com/65535/49220313732_6c98051f80_b.jpg",
        "https://live.staticflickr.com/65535/49219621673_97e00f33de_b.jpg",
        "https://live.staticflickr.com/65535/48539386741_704564729e_b.jpg",
        ];
    const [currentImgIdx, setIdx] = useState(0)

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
            <div className="carousel">
                    <Arrow
                        direction="left"
                        clickFunction={previousSlide}
                        glyph="&#9664;" />

                    <ImageSlide url={imgUrls[currentImgIdx]} />

                    <Arrow
                        direction="right"
                        clickFunction={nextSlide}
                        glyph="&#9654;" />
            </div>
        );
}

export default Carousel;