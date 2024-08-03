'use client';

import {useContext, useEffect, useState} from "react";
import clientContext from "@/lib/context/ClientContext";

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
                    <div className="home__banner"
                         style={{transform: `translateX(calc(-100% * ${slide} - (10vw * ${slide})))`}}
                         onTouchStart={({touches}) => {
                             setTouchPoint(({move: 0, start: touches[0].clientX}));
                         }}
                         onTouchMove={({touches}) => {
                             setTouchPoint(prev => ({...prev, move: touches[0].clientX}));
                         }}
                         onTouchEnd={() => {
                             const diff = touchPoint.start - touchPoint.move;

                             if (Math.abs(diff) > 50) {
                                 if (diff > 0) {
                                     setSlide(prev => {
                                         if (prev >= length - 1) return 0;

                                         return prev + 1;
                                     })
                                 } else {
                                     setSlide(prev => {
                                         if (prev <= 0) return length - 1;

                                         return prev - 1;
                                     })
                                 }
                             }
                         }}>
                        {children}
                    </div>
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
