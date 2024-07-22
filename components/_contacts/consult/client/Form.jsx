'use client';

import Link from "next/link";
import {IMaskInput} from "react-imask";
import {useRef, useState} from "react";

export default function Form() {
    const [isLazy, setLazy] = useState(true);
    const phoneRef = useRef(null);
    const [errors, setErrors] = useState({
        phone: false,
        name: false,
        policy: false
    });

    const submitHandler = (e => {
        e.preventDefault();


    });

    return (
        <form className={"consult__form"} noValidate={true} onSubmit={submitHandler}>
            <label htmlFor="name" className={"consult__form__error "}>Имя обязательно</label>
            <input type="text"
                   name={"name"}
                   className={"consult__form__input"}
                   placeholder={"Ваше имя"} required={true}/>
            <label htmlFor="phone" className={"consult__form__error "}>Номер телефона обязателен</label>
            <IMaskInput
                mask={'+7 (000) 000-00-00'}
                radix={"."}
                unmask={true} // true|false|'typed'
                lazy={isLazy}
                inputRef={phoneRef}
                onAccept={(value, mask) => {
                    if (errors.phone && !RegExp(/_/).test(phoneRef.current.value)) {
                        setErrors((prev) => ({...prev, phone: false}));
                    }
                }}
                onFocus={() => {
                    if (isLazy) setLazy(false);
                }}
                onBlur={() => {
                    if (phoneRef.current.value === "+7 (___) ___-__-__") setLazy(true);
                }}
                className={"consult__form__input"}
                name={"phone"}
                required={true}
                placeholder="Ваш телефон (к которому привязан WhatsApp/Telegram)"
            />
            <textarea name={"message"}
                      className={"consult__form__input _textarea"}
                      placeholder={"Пожелания к отдыху"}
                      rows={8}>
            </textarea>
            <button className={"consult__form__input consult__button"}>
                Отправить
            </button>
            <label htmlFor="phone" className={"consult__form__error "}>Согласие с обработкой данных обязательно</label>
            <label>
                <input type="checkbox" name={"policy"} className={"consult__form__checkbox"} required={true}/>
                Подтвердите свое согласие с условиями обработки персональных данных
                <Link href={"/agreement"}
                      className={"static__link"}
                      style={{display: "inline"}}> политикой конфиденциальности
                </Link>
            </label>
        </form>
    )
}
