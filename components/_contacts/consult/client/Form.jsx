'use client';

import Link from "next/link";
import {IMaskInput} from "react-imask";
import {useRef, useState, useEffect} from "react";

export default function Form() {
    const [isLazy, setLazy] = useState(true);
    const phoneRef = useRef(null);
    const policyRef = useRef(null);
    const [isSubmiting, setSubmiting] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [message, setMessage] = useState({
        text: "Ваше сообщение доставлено",
        status: true,
        open: false
    });
    const [errors, setErrors] = useState({
        phone: false,
        name: false,
        policy: false
    });

    const submitHandler = async e => {
        e.preventDefault();

        let error = false;

        if (RegExp(/_/).test(phoneRef.current.value) || phoneRef.current.value === "") {
            if (!errors.phone) setErrors((prev) => ({...prev, phone: true}));
            error = true;
        }
        if (nameInput.length < 3 || nameInput.length > 70) {
            if (!errors.name) setErrors((prev) => ({...prev, name: true}));
            error = true;
        }
        if (errors.name && nameInput.length >= 3 && nameInput <= 70) {
            setErrors((prev) => ({...prev, name: false}))
        }
        if (!policyRef.current.checked) {
            if (!errors.policy) setErrors((prev) => ({...prev, policy: true}));
            error = true;
        }

        if (error) {
            return;
        }

        const formData = new FormData(e.target);

        setSubmiting(true);

        await fetch('/api/form/callback', {method: 'POST', body: formData})
            .then((response) => {
                if (!response.ok) {
                    setMessage((current) => ({...current, status: false}));

                }

                return response.json();
            })
            .then((data) => {
                if (!data.message) {
                    throw new Error();
                }

                setMessage((current) => ({...current, message: data.message, open: true}));

                e.target.reset();

                setNameInput('');
            })
            .catch(() => {
                setMessage((current) => (
                    {
                        ...current,
                        status: false,
                        message: 'Непредвиденная ошибка, попробуйте перезагрузить страницу.',
                        open: true
                    }
                ));
            })
            .finally(() => setSubmiting(false));

    };

    useEffect(() => {
        if (nameInput.match(/^\s+|.*\s{3,}/g) !== null) {
            setNameInput((prev) => prev.replace(/^\s+/g, '').replace(/\s{3,}/g, '  '));
        }

        if (nameInput.match(/([А-Яа-я]+[ ]{0,})+/g) === null) setNameInput('');

        else if (nameInput.match(/([А-Яа-я]+[ ]{0,})+/g) !== null
            && nameInput.match(/([А-Яа-я]+[ ]{0,})+/g)[0].length != nameInput.length) {
            setNameInput((prev) => prev.match(/([А-Яа-я]+[ ]{0,})+/g).join(''));
        }
    }, [nameInput]);

    useEffect(() => {
        if(message.open === true) {
            setTimeout(()=>{
                setMessage((current) => ({...current, open: "close"}));
            },3000);
        } else if (message.open === "close") {
            setTimeout(()=>{
                setMessage((current) => ({...current, open: false}));
            }, 400);
        }
    }, [message.open]);

    return (
        <form className={"consult__form"} noValidate={true} onSubmit={submitHandler}>
            {
                message.open &&
                <div className={"consult__form__message " + (message.open === "close" ? "_close" : "")}>
                    {message.text}
                </div>
            }
            <label htmlFor="name" className={"consult__form__error " + (errors.name ? "_active" : "")}>
                Имя обязательно
            </label>
            <input type="text"
                   name={"name"}
                   className={"consult__form__input"}
                   placeholder={"Ваше имя"} required={true}
                   value={nameInput}
                   minLength={3} maxLength={70}
                   onChange={(e) => {
                       console.log(e.target.value);
                       console.log(nameInput.length);
                       e.preventDefault();
                       setNameInput(e.target.value);
                       if (errors.name && e.target.value.length >= 3 && e.target.value.length <= 70) {
                           setErrors((prev) => ({...prev, name: false}));
                       }
                   }}
            />
            <label htmlFor="phone" className={"consult__form__error " + (errors.phone ? "_active" : "")}>
                Номер телефона обязателен
            </label>
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
                      rows={8} maxLength={2000}>
            </textarea>
            <button className={"consult__form__input consult__button"} disabled={isSubmiting}>
                Отправить
            </button>
            <label htmlFor="phone" className={"consult__form__error " + (errors.policy ? "_active" : "")}>
                Согласие с обработкой данных обязательно
            </label>
            <label>
                <input type="checkbox"
                       name={"policy"}
                       ref={policyRef}
                       className={"consult__form__checkbox"}
                       required={true}
                       onChange={({target}) => {
                           if (target.checked) {
                               setErrors((prev) => ({...prev, policy: false}));
                           }
                       }}/>
                Подтвердите свое согласие с условиями обработки персональных данных
                <Link href={"/agreement"}
                      className={"static__link"}
                      style={{display: "inline"}}> политикой конфиденциальности
                </Link>
            </label>

        </form>
    )
}
