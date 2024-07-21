'use client';
import {useRef, useState} from "react";

export default function Accordion({content, transition, children}) {
    const [isHide, setHide] = useState(false);
    const ref = useRef(false);

    return (
        <div className={"static__content faq__accordion " + (isHide ? '_active' : '')}
             style={{transition: transition}}
             onClick={() => setHide((prev) => !prev)}>
            {children}
            <div className="faq__accordion__content"
                 style={isHide ? {height: ref.current.clientHeight + 'px'} : {}}>
                <p ref={ref} dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
        </div>
    )
}