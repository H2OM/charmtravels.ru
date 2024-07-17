import Image from "next/image";
import Link from "next/link";
import '../footer.scss';
import SubsForm from "@/components/footer/client/SubsForm";

export default function Footer() {

    return (
        <footer className={"footer"}>

            <div className="container footer__fly">
                <h2 className="static__title">
                    Подпишитесь на нашу рассылку!
                </h2>
                <SubsForm>
                    <input name={"mail"} type={"email"} className={"footer__fly__form__input"}
                           placeholder={"Введите адрес электронной почты"}/>
                    <button className={"footer__fly__form__submit"} type={"submit"}>Подписаться</button>
                </SubsForm>
            </div>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content__main">
                        <div className="footer__content__main__block">
                            <Link href={"/"}>
                                <Image
                                    src={"/logo/logo.png"}
                                    alt={"logo"}
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    quality={100}
                                    priority={true}
                                    className={"footer__content__main__block__image"}
                                />
                            </Link>
                            <div className="static__info">
                                <Link href={"tel:+79182170638"}>{process.env.phone}</Link>
                                <Link href={"mail:charmtravel.krd@gmail.com"}>{process.env.mail}</Link>
                                <span>{process.env.address}</span>
                            </div>
                        </div>
                        <div className="footer__content__main__block">
                            <div className="footer__content__main__block__section">
                                <div className="footer__content__main__block__section__title">
                                    Услуги
                                </div>
                                <div className="footer__content__main__block__section__items">
                                    <Link href={"/services#prices"} className={"static__link"}>Цены</Link>
                                    <Link href={"/services#tours"} className={"static__link"}>Туры</Link>
                                    <Link href={"/services#hotels"} className={"static__link"}>Отели</Link>
                                    <Link href={"/services#cruises"} className={"static__link"}>Круизы</Link>
                                    <Link href={"/services#excursions"} className={"static__link"}>Экскурсии</Link>
                                </div>
                            </div>
                            <div className="footer__content__main__block__section">
                                <div className="footer__content__main__block__section__title">
                                    О компании
                                </div>
                                <div className="footer__content__main__block__section__items">
                                    <Link href={"/company#about"} className={"static__link"}>О нас</Link>
                                    <Link href={"/company#team"} className={"static__link"}>Наша команда</Link>
                                    <Link href={"/company#stages"} className={"static__link"}>Этапы нашей работы</Link>
                                    <Link href={"/company#advantages"} className={"static__link"}>Наши
                                        преимущества</Link>
                                    <Link href={"/company#pick"} className={"static__link"}>Почему нас выбирают</Link>
                                    <Link href={"/company#feedback"} className={"static__link"}>Отзывы</Link>
                                    <Link href={"/company#requisites"} className={"static__link"}>Реквизиты</Link>
                                    <Link href={"/contacts"} className={"static__link"}>Контакты</Link>
                                </div>
                            </div>
                            <div className="footer__content__main__block__section">
                                <Link href={process.env.anketa} target={"_blank"}
                                      className={"static__link static__link_btn footer__content__main__block__section__title"}>
                                    Подбор тура
                                </Link>
                                <div className="footer__content__main__block__section__items">
                                    <Link href={"/hot"} className={"static__link"}>Горящие туры</Link>
                                    <Link href={"/contacts#consult"} className={"static__link"}>Консультация</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="static__info footer__content__bottom">
                        <span>© 2024 CHARM TRAVEL</span>
                        <span>Предложения на сайте не являются публичной офертой и носят исключительно информационный характер</span>
                        <Link href={"/agreement"}>Положение об обработке персональных данных</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
