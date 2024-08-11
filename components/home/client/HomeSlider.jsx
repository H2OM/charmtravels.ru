'use client';

import {useContext, useEffect, useState} from "react";
import clientContext from "@/lib/context/ClientContext";
import TouchSlider from "@/lib/basecomponents/touchSlider/touchSlider";

export default function HomeSlider({length, children}) {
    const {isDesktop} = useContext(clientContext);
    const [slide, setSlide] = useState(0);
    const [touchPoint, setTouchPoint] = useState({start: 0, move: 0});
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => {
                if (prev >= length - 1) return 0;

                return prev + 1;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [length, slide, touchPoint]);

    return (
        <div className={"home__banner__wrap"}>
            {
                isDesktop ?
                    <div className="home__banner"
                         style={{transform: `translateX(calc(-100% * ${slide} - (10vw * ${slide})))`}}>
                        {children}
                    </div>
                    :
                    <TouchSlider className={"home__banner"}
                        style={{transform: `translateX(calc(-100% * ${slide} - (10vw * ${slide})))`}}
                        length={length}
                        setSlide={setSlide}>
                        {children}
                    </TouchSlider>
            }
            <div className="home__banner__pagination">
                {
                    Array.from({length: length}).map((_, i) => {
                        return (
                            <button className={"home__banner__pagination__dot " + (slide === i ? "_active" : "")}
                                key={i}
                                onClick={() => setSlide(i)}>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}
