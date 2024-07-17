'use client';

import {useEffect, useState} from "react";

export default function SafeSlider({length, children}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentCount, setCurrentCount] = useState(1);

    useEffect(() => {

        setCurrentCount(5);

    }, []);

    return (
        <div className={"safe__images"}>
            <div className="safe__images__window"
                 style={{transform: `translateX(-${100 * currentSlide}%)`}}>
                {children}
            </div>
            <div className="safe__images__pagination">
                {
                    Array.from({length: Math.ceil(length / currentCount)}).map((each, i) => {
                        return (
                            <div key={i}
                                 className={"feedback__slider__pagination__dot " + (currentSlide === i ? "active" : "")}
                                 onClick={() => setCurrentSlide(i)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
