'use client';

import {useState} from "react";

export default function Openmenu({children, title}) {

    const [isOpen, triggerOpen] = useState(false);


    return (
        <div className={"header__nav__open " + (isOpen ? "header__nav__open_show" : "")}>
            <button className={"header__nav__open__trigger static__link"}
                    onClick={() => triggerOpen(prev => !prev)}
                    onBlur={()=>triggerOpen(false)}>
                {title}
            </button>
            <div className={"header__nav__open__menu"}>
                {children}
            </div>
        </div>
    )
}