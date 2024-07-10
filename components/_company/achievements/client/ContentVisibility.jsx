'use client';
import {useContext, useEffect, useRef, useState} from "react";
import ClientContext from "@/lib/context/ClientContext";

export default function ContentVisibility({children}) {
    const [isVisible, setVisible] = useState(false);
    const [refOffset, setRefOffset] = useState(false);
    const ref = useRef(null);
    const {scroll} = useContext(ClientContext);

    useEffect(() => {
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

        setRefOffset(offset);

    }, [ref]);

    return (
        <div ref={ref} className={"advantages__content " + (isVisible ? "advantages__content_visible" : "")}>
            {children}
        </div>
    )
}