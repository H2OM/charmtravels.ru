'use client';

import {useEffect, useState} from "react";

export default function HomeSlider({length, children}) {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setSlide(prev => {
                if (prev >= length-1) return 0;

                return prev + 1;
            });
        }, 4000);

        return ()=> clearInterval(interval);
    }, [length, slide]);

    return (
        <div className={"home__banner__wrap"}>
            <div className="home__banner" style={{transform: `translateX(calc(-100% * ${slide} - (10vw * ${slide})))`}}>
                {children}
            </div>
            <div className="home__banner__pagination">
                {
                    Array.from({length: length}).map((_, i) => {
                        return (
                            <div className={"home__banner__pagination__dot " + (slide === i ? "_active" : "")}
                                 key={i}
                                 onClick={() => setSlide(i)}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
