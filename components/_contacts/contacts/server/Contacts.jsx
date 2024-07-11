import '../contacts.scss';
import Link from "next/link";
import Image from "next/image";

export default function Contacts() {

    const OTHER = (process.env.other !== undefined ? JSON.parse(process.env.other).map((each, i) => {
        return (
            <Link href={each.link} className={"static__link"} key={each.title + i}>{each.title}</Link>
        )
    }) : false);

    return (
        <section className={"contacts"}>
            <div className="container">
                <h2 className={"static__title"}>Контакты</h2>
                <div className="contacts__grid">
                    <div className="contacts__grid__block">
                        <div className="static__subtitle">
                            Адрес
                        </div>
                        <Image
                            src={"/svg/double-dot.svg"}
                            className="team__slider__content__item__main__svg"
                            alt={"-"}
                            height={16}
                            width={16}
                            quality={100}
                            priority={true}
                        />
                        <div className="static__content">
                            {process.env.address}
                            <span>Время работы:</span>
                            Пн—Вс: 09:00—21:00
                        </div>
                    </div>
                    <div className="contacts__grid__block" style={{animationDelay: "0.2s"}}>
                        <div className="static__subtitle">
                            Для связи
                        </div>
                        <Image
                            src={"/svg/double-dot.svg"}
                            className="team__slider__content__item__main__svg"
                            alt={"-"}
                            height={16}
                            width={16}
                            quality={100}
                            priority={true}
                        />
                        <div className="static__content">
                            <span>Телефон:</span>
                            <Link href={`tel:${process.env.phone}`}
                                  className={"static__link"}>{process.env.phone}</Link>
                            <span>Электронна почта:</span>
                            <Link href={`mailto: ${process.env.mail}`}
                                  className={"static__link"}>{process.env.mail}</Link>
                        </div>
                    </div>
                    <div className="contacts__grid__block" style={{animationDelay: "0.4s"}}>
                        <div className="static__subtitle">
                            Соц. сети
                        </div>
                        <Image
                            src={"/svg/double-dot.svg"}
                            className="team__slider__content__item__main__svg"
                            alt={"-"}
                            height={16}
                            width={16}
                            quality={100}
                            priority={true}
                        />
                        <div className="contacts__grid__block__socs">
                            <Link href={process.env.WA} className={"static__link_svg"}>
                                <Image
                                    src={"/svg/WA.svg"}
                                    alt={"TG"}
                                    height={28}
                                    width={29}
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                            <Link href={process.env.TG} className={"static__link_svg"}>
                                <Image
                                    src={"/svg/TG.svg"}
                                    alt={"TG"}
                                    height={28}
                                    width={28}
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                            <Link href={process.env.VK} className={"static__link_svg"}>
                                <Image
                                    src={"/svg/VK.svg"}
                                    alt={"VK"}
                                    height={28}
                                    width={28}
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                            <Link href={process.env.INST} className={"static__link_svg"}>
                                <Image
                                    src={"/svg/INST.svg"}
                                    alt={"INST"}
                                    height={28}
                                    width={28}
                                    quality={100}
                                    priority={true}
                                />
                            </Link>
                        </div>
                        <div className="contacts__grid__block__big">
                            <div className="static__content">
                                <span>QR-кода на instagram*:</span>

                            </div>
                            <Image
                                src={"/contacts/instQR.png"}
                                alt={"INST"}
                                height={200}
                                width={200}
                                quality={100}
                                priority={true}
                            />

                        </div>
                    </div>
                    {
                    OTHER.length > 0 &&
                        <div className="contacts__grid__block contacts__grid__block_more">
                            <div className="static__subtitle">
                                Еще
                            </div>
                            <Image
                                src={"/svg/double-dot.svg"}
                                className="team__slider__content__item__main__svg"
                                alt={"-"}
                                height={16}
                                width={16}
                                quality={100}
                                priority={true}
                            />
                            <div className="static__content">
                                {OTHER}
                            </div>
                        </div>
                    }
                </div>
                <div className="static__content contacts__desc">
                    * - Принадлежит запрещенной в России организации Meta
                </div>
            </div>
        </section>
    )
}