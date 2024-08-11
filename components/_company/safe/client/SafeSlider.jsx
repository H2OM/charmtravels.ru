'use client';

import {useContext, useEffect, useState} from "react";
import clientContext from "@/lib/context/ClientContext";
import TouchSlider from "@/lib/basecomponents/touchSlider/touchSlider";

export default function SafeSlider({length, children}) {
    const {isDesktop, clientWidth} = useContext(clientContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentCount, setCurrentCount] = useState(1);
    const [touchPoint, setTouchPoint] = useState({start: 0, move: 0});

    useEffect(() => {
        if(clientWidth > 1400) {
            setCurrentCount(5);
        } else if(clientWidth > 768) {
            setCurrentCount(4);
        } else if (clientWidth > 490) {
            setCurrentCount(3);
        } else {
            setCurrentCount(2);
        }
    }, [clientWidth]);

    return (
        <div className={"safe__images"}>
            {
                isDesktop ?
                    <div className="safe__images__window"
                         style={{transform: `translateX(-${100 * currentSlide}%)`}}>
                        {children}
                    </div>
                    :
                    <TouchSlider
                         className={"safe__images__window"}
                         style={{transform: `translateX(-${100 * currentSlide}%)`}}
                         length={Math.ceil(length / currentCount)}
                         setSlide={setCurrentSlide}>
                        {children}
                    </TouchSlider>
            }

            <div className="safe__images__pagination">
                {
                    Array.from({length: Math.ceil(length / currentCount)}).map((each, i) => {
                        return (
                            <div key={i}
                                 className={"safe__images__pagination__dot " + (currentSlide === i ? "active" : "")}
                                 onClick={() => setCurrentSlide(i)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
