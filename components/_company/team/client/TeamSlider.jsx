'use client';

import Image from "next/image";
import {useEffect, useState} from "react";

export default function TeamSlider({data, children}) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentNavBar, setCurrentNavBar] = useState(0);
    const [itmCountInNavBar, setItmCountInNavBar] = useState(0);
    const incNavBar = (count = 1) => {
        console.log(count);
        if ((currentNavBar + itmCountInNavBar + count) <= data.length) {
            setCurrentNavBar((prev) => prev + count);
        } else  {
            setCurrentNavBar(() =>data.length - itmCountInNavBar);
        }
    }
    const decNavBar = (count = 1) => {
        if (currentNavBar - count >= 0) {
            setCurrentNavBar((prev) => prev - count);
        } else {
            setCurrentNavBar(() => 0);
        }
    }
    const incSlider = () => {
        if (currentSlide + 1 < data.length) {
            setCurrentSlide(prev => prev + 1);
            if ((currentSlide + 1) >= currentNavBar + itmCountInNavBar) {
                incNavBar(itmCountInNavBar);
            }

        }
    }
    const decSlider = () => {
        if (currentSlide - 1 >= 0) {
            setCurrentSlide(prev => prev - 1);
            console.log(currentSlide - 1);
            console.log(currentNavBar);
            if((currentSlide - 1) < currentNavBar) {
                decNavBar(itmCountInNavBar);
            }

        }
    }

    useEffect(() => {

        setItmCountInNavBar(4);

    }, []);


    return (
        <div className="team__slider">
            <div className="team__slider__bar__nav">
                <button className="static__nav__left" onClick={()=>decNavBar(1)}></button>
                <button className="static__nav__right" onClick={()=>incNavBar(1)}></button>
            </div>
            <div className="team__slider__bar"
                 style={{transform: `translateX(calc(-${25 * currentNavBar}% - ${currentNavBar * 3}px)`}}>
                {
                    data.map((each, i) => {
                        return (
                            <div className={"team__slider__bar__item " + (currentSlide === i ? "active" : "")}
                                 key={each.name + i}
                                 onClick={() => setCurrentSlide(i)}>
                                <div className="team__slider__bar__item__image__wrap">
                                    <Image
                                        src={each.image}
                                        className={"team__slider__barv__image"}
                                        alt={"logo"}
                                        height={100}
                                        width={100}
                                        quality={100}
                                        priority={true}
                                    />
                                </div>
                                <div className="team__slider__bar__item__title">
                                    {each.name}
                                    <span>
                                        {
                                            Array.isArray(each.titles) && each.titles[0]
                                        }
                                        {
                                            typeof each.titles === "string" && each.titles
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={"team__slider__wrap"}>
                <div className="team__slider__window">
                    <div className="team__slider__content" style={{transform: `translateX(-${100 * currentSlide}%)`}}>
                        {children}

                    </div>
                </div>
                <button className="static__nav__left" onClick={decSlider}></button>
                <button className="static__nav__right" onClick={incSlider}></button>
            </div>
        </div>

    )
}