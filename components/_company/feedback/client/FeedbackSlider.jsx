'use client';

import {useState} from "react";

export default function FeedbackSlider({length, children}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const incSlider = () => {

        let equal = Math.ceil(length / 3);

        if (currentSlide + 1 < equal) {
            setCurrentSlide(prev => prev + 1);
        }
    }
    const decSlider = () => {
        if (currentSlide - 1 >= 0) {
            setCurrentSlide(prev => prev - 1);
        }
    }

    return (
        <div className="feedback__slider">
            <div className="feedback__slider__wrap">
                <div className="feedback__slider__window"
                     style={{transform: `translateX(calc(-${100 * currentSlide}% - ${40 * Number(Boolean(currentSlide))}px))`}}>
                    {children}
                </div>
            </div>
            <button className={"static__nav__left"} onClick={decSlider}></button>
            <button className={"static__nav__right"} onClick={incSlider}></button>
        </div>
    )
}
