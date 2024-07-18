'use client';

import ClientContext from "@/lib/context/ClientContext";
import {useState, useEffect, useRef, useContext} from "react";

export default function ContentVisible({children}) {
    const [isVisible, setVisible] = useState(false);
    const [refOffset, setRefOffset] = useState(false);
    const ref = useRef(null);
    const {scroll} = useContext(ClientContext);

    useEffect(() => {
        console.log(refOffset);
        if (!isVisible && refOffset && scroll >= (refOffset - (window.innerHeight / 1.5))) {
            setVisible(true);
        }
    }, [scroll]);

    useEffect(() => {

        let offset = 0;
        let element = ref.current;

        while (element.offsetParent !== null) {
            offset += element.offsetTop;
            element = element.offsetParent;
        }

        console.log(offset);

        setRefOffset(offset);

        if (!isVisible && offset && scroll >= (offset - (window.innerHeight / 1.5))) {
            setVisible(true);
        }

    }, [ref]);

    return (
        <div ref={ref} className={"visible-content " + (isVisible ? "visible-content_visible" : "")}>
            {children}
        </div>
    )
}
