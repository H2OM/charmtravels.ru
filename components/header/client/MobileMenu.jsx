'use client';

import {useEffect, useState} from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [isOpen, triggerOpen] = useState(false);
    const [isSubMenuOpen, triggerSubMenu] = useState(0);

    useEffect(() => {
        triggerSubMenu(0);
    }, [isOpen]);

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
                 onClick={({target}) => {
                     if (target.classList.contains('static__link')) {
                         triggerOpen(false);
                     }
                 }}>
                <Link href={"/hot"} className={"static__link"} data-adapt={'1130'}>Горящие туры</Link>
                <Link href={"/faq"} className={"static__link"} data-adapt={'1130'}>Часто задаваемые вопросы</Link>
                <Link href={"/contacts"} className={"static__link "} data-adapt={'780'}>Контакты</Link>
                <div className={"header__nav__mobile__menu__block " + (isSubMenuOpen === 1 ? "_active" : "")}>
                    <div className={"header__nav__mobile__menu__title"}
                         onClick={() => triggerSubMenu(prev => prev === 1 ? 0 : 1)}>
                        Услуги
                    </div>
                    <div className="header__nav__mobile__menu__block__content"
                         style={{height: isSubMenuOpen === 1 ? "190px" : ""}}>
                        <p>
                            <Link href={"/services#prices"} className={"static__link"}>Цены</Link>
                            <Link href={"/services#tours"} className={"static__link"}>Туры</Link>
                            <Link href={"/services#hotels"} className={"static__link"}>Отели</Link>
                            <Link href={"/services#cruises"} className={"static__link"}>Круизы</Link>
                            <Link href={"/services#excursions"} className={"static__link"}>Экскурсии</Link>
                        </p>
                    </div>
                </div>
                <div className={"header__nav__mobile__menu__block " + (isSubMenuOpen === 2 ? "_active" : "")}>
                    <div className={"header__nav__mobile__menu__title"}
                         onClick={() => triggerSubMenu(prev => prev === 2 ? 0 : 2)}>
                        О компании
                    </div>
                    <div className="header__nav__mobile__menu__block__content"
                         style={{height: isSubMenuOpen === 2 ? "266px" : ""}}>
                        <p>
                            <Link href={"/company#about"} className={"static__link"}>О нас</Link>
                            <Link href={"/company#team"} className={"static__link"}>Наша команда</Link>
                            <Link href={"/company#stages"} className={"static__link"}>Этапы нашей работы</Link>
                            <Link href={"/company#advantages"} className={"static__link"}>Наши преимущества</Link>
                            <Link href={"/company#pick"} className={"static__link"}>Почему нас выбирают</Link>
                            <Link href={"/company#reviews"} className={"static__link"}>Отзывы</Link>
                            <Link href={"/company#requisites"} className={"static__link"}>Реквизиты</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}