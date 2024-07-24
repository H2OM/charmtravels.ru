'use client';

import {useEffect, useState} from "react";

export default function ReviewsSlider({length, children}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentCount, setCurrentCount] = useState(1);

    const incSlider = () => {
        let equal = Math.ceil(length / currentCount);

        if (currentSlide + 1 < equal) {
            setCurrentSlide(prev => prev + 1);
        }
    }
    const decSlider = () => {
        if (currentSlide - 1 >= 0) {
            setCurrentSlide(prev => prev - 1);
        }
    }

    useEffect(() => {

        setCurrentCount(3);

    }, []);

    return (
        <div className="reviews__slider">
            <div className="reviews__slider__wrap">
                <div className="reviews__slider__window"
                     style={{transform: `translateX(calc(-${100 * currentSlide}% - ${40 * Number(Boolean(currentSlide))}px))`}}>
                    {children}
                </div>
            </div>
            <button className={"static__nav__left"} onClick={decSlider}></button>
            <button className={"static__nav__right"} onClick={incSlider}></button>
            <div className={"reviews__slider__pagination"}>
                {
                    Array.from({length: Math.ceil(length / currentCount)}).map((each, i) => {
                        return (
                            <div key={i}
                                 className={"reviews__slider__pagination__dot " + (currentSlide === i ? "active" : "")}
                                 onClick={()=>setCurrentSlide(i)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
