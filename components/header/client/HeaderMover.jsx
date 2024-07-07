'use client';

import {useContext, useEffect, useRef, useState} from "react";
import ClientContext from "@/lib/context/ClientContext";

export default function HeaderMover({children}) {
    const {scroll} = useContext(ClientContext);
    const ref = useRef(null);
    const [refInfo, setRefInfo] = useState({refHeight: 0, refTop: 0, refY: 0});

    useEffect(() => {

        let info = ref.current.getBoundingClientRect();

        setRefInfo({
            refHeight: info.height,
            refTop: Number(window.getComputedStyle(ref.current).top.replace("px", "")),
            refY: info.top
        });

    }, [ref]);

    useEffect(() => {
        if(scroll > (refInfo.refHeight + refInfo.refTop + 30) && !ref.current.classList.contains('header__nav_collapse')) {
            ref.current.classList.add('header__nav_collapse');
        } else if(scroll <= (refInfo.refTop - 30) && ref.current.classList.contains('header__nav_collapse')) {
            ref.current.classList.remove('header__nav_collapse');
        }

    }, [scroll]);

    return (
        <nav ref={ref} className={"header__nav"}>
            {children}
        </nav>
    )
}