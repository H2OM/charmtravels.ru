'use client';

import {useContext, useEffect, useRef, useState} from "react";
import ClientContext from "@/lib/context/ClientContext";

export default function HeaderMover({children}) {

    const {scroll} = useContext(ClientContext);
    const ref = useRef(null);
    return (
        <nav ref={ref}
             className={
                "header__nav " + (
                     scroll > (ref.current.getBoundingClientRect().height + ref.current.getBoundingClientRect().top)
                     ? "header__nav_collapse" : ""
                )
             }
            // style={{top: (scroll >= 130 ? (160 + (scroll - 130)) + "px" : "")}}
        >
            {children}
        </nav>
    )
}