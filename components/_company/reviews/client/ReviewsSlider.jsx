'use client';

import {useContext, useEffect, useState} from "react";
import clientContext from "@/lib/context/ClientContext";
import TouchSlider from "@/lib/basecomponents/touchSlider/touchSlider";

export default function ReviewsSlider({length, children}) {
    const {isDesktop, clientWidth} = useContext(clientContext);
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
        if(clientWidth > 1000) {
            setCurrentCount(3);
        } else if(clientWidth > 660) {
            setCurrentCount(2);
        } else {
            setCurrentCount(1)
        }
    }, [clientWidth]);

    return (
        <div className={'reviews__slider__pagination__wrap'}>
            <div className="reviews__slider">
                <div className="reviews__slider__wrap">
                    {
                        isDesktop ?
                            <div className="reviews__slider__window"
                                 style={{transform: `translateX(calc(-${100 * currentSlide}%))`}}>
                                {children}
                            </div>
                            :
                            <TouchSlider className={"reviews__slider__window"}
                                         style={{transform: `translateX(calc(-${100 * currentSlide}%))`}}
                                         length={Math.ceil(length / currentCount)}
                                         setSlide={setCurrentSlide}>
                                {children}
                            </TouchSlider>
                    }

                </div>
                <button className={"static__nav__left"} onClick={decSlider}></button>
                <button className={"static__nav__right"} onClick={incSlider}></button>
            </div>
            <div className={"reviews__slider__pagination"}>
                {
                    Array.from({length: Math.ceil(length / currentCount)}).map((each, i) => {
                        return (
                            <div key={i}
                                 className={"reviews__slider__pagination__dot " + (currentSlide === i ? "active" : "")}
                                 onClick={() => setCurrentSlide(i)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
