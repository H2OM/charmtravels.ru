import '../hotels.scss';
import Link from "next/link";
import Image from "next/image";

export default function Hotels() {
    return (
        <section className={"hotels"} id={"hotels"}>
            <div className="container">
                <h2 className={"static__title"}>Отели</h2>
                <div className="hotels__content">
                    <div className="static__content">
                        <h3 className={"static__subtitle2"}>Выгода бронирования через нас</h3>
                        <Image
                            src={"/svg/double-dot.svg"}
                            className="hotels__svg"
                            alt={"-"}
                            height={16}
                            width={16}
                            quality={100}
                            priority={true}
                        />
                        <h3 className={"static__subtitle2 _mb30"}>Movenpick Anapa 5*</h3>
                        На примере популярного отеля в Анапе, выгода бронирования через нас:
                        <div className="hotels__content__price static__subtitle2">
                            <span>69 930 ₽</span><span className={"hotels__content__price__cross"}>88 830 ₽</span>
                            <Link href={"/contacts#consult"} className={"static__link_btn"}>Расчет актуальной цены</Link>
                        </div>

                    </div>
                    <Image
                        src={"/services/hotels/movenpick.jpg"}
                        className={"hotels__content__image"}
                        alt={"image"}
                        height={0}
                        width={0}
                        sizes="100vw"
                        quality={100}
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}