'use client';

import {useState} from "react";

export default function MobileMenu({children, title}) {

    const [isOpen, triggerOpen] = useState(false);

    return (
        <div className={"header__nav__mobile__menu header__nav__open " + (isOpen ? " header__nav__open_show " : "")}>
            <button className={
                "header__nav__open__trigger header__nav__mobile header__nav__mobile__burger "
                + (isOpen ? "_active" : "")}
                    onClick={() => triggerOpen(prev => !prev)}>
                <hr/>
                <hr/>
                <hr/>
            </button>
            <div className={"header__nav__open__menu"}
                 onClick={({target})=>{
                     if(target.classList.contains('static__link')) {
                        triggerOpen(false);
                     }
                 }}>
                {children}
            </div>
        </div>
    )
}