'use client';

import {useState} from "react";

export default function TouchSlider({children, setSlide, length, style, className}) {
    const [touchPoint, setTouchPoint] = useState({start: 0, move: 0});

    return (
        <div className={className}
             style={style}
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
                             if (prev >= length - 1) return prev;

                             return prev + 1;
                         })
                     } else {
                         setSlide(prev => {
                             if (prev <= 0) return prev;

                             return prev - 1;
                         })
                     }
                 }
             }}>
            {children}
        </div>
    )
}
