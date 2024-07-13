import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Image from "next/image";
import SafeSlider from "@/components/_company/safe/client/SafeSlider";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import '../safe.scss';

export default function Safe({data}) {
    return (
        <section className={"safe"} id={"safe"}>
            <div className="container">
                <h2 className={"static__title"}>С нами безопасно</h2>
                <h3 className={"static__subtitle"}>Работаем законно и официально</h3>
                <br/>
                {
                    data &&
                    <ContentVisible>
                        <div className={"static__content"}>
                            <br/>
                            <div className={"safe__manifest"}>
                                <p style={{transition: "0.8s all"}}>
                                    Мы предоставляем официальные документы, по которым вы можете проверить то, что мы
                                    действительно работаем законно и официально.
                                </p>
                            </div>
                            <br/>
                            <div className={"safe__manifest"}>
                                <p style={{transition: "0.8s 0.4s all"}}>
                                    Предоставляем заключенные договора с поставщиками услуг (с туроператорами, у которых
                                    бронируем туры). Что доказывает то, что мы имеем право совершать турагентскую
                                    деятельность.
                                    предлагаем встретиться лично в следующих городах: Москва, Казань, Тюмень, Краснодар
                                    и
                                    подборать тур/забронировать вместе в реальном времени.
                                </p>
                            </div>
                            <br/>
                            <div className={"safe__manifest"}>
                                <p style={{transition: "0.8s 0.8s all"}}>
                                    Либо онлайн (работаем с туристами со всей России), где все действия в рамках
                                    законодательства РФ, а именно - подписание договора онлайн (по СМС) согласно 1 ст.
                                    434
                                    ГК
                                    РФ; прием оплаты безналичным способом на расчетный счет компании любым из
                                    перечисленных
                                    далее способов - QR-код, ссылка (интернет-эквайринг), квитанция с прописанием
                                    полностью
                                    реквизитов нашего ИП.
                                </p>
                            </div>
                            <br/>
                            <div className={"safe__manifest"}>
                                <p style={{transition: "0.8s 1.2s all"}}>
                                    Если поездка не на ближайшие даты, можете оплатить только минимальную часть суммы
                                    тура
                                    (по
                                    предоплате, согласно условиям бронирования туров туроператора). Мы забронируем,
                                    пришлем
                                    вам
                                    номер вашей заявки. По нему на сайте туроператора вы сможете убедиться, что ваша
                                    заявка
                                    существует. И уже остальную часть денег оплатить позже, согласно условиям полной
                                    оплаты
                                    (в
                                    зависимости от направления (страны, куда турист летит), перелета (на
                                    чартере/регулярке),
                                    туроператора день полной оплаты может меняться - об этом все расскажет наш менеджер.
                                </p>
                            </div>

                        </div>
                        <SafeSlider length={data.length}>
                            {
                                data.map((each, i) => {
                                    return (
                                        <Image
                                            src={each}
                                            className="safe__images__image"
                                            alt={"image"}
                                            height={600}
                                            width={600}
                                            quality={100}
                                            priority={true}
                                            key={each + i}
                                        />
                                    )
                                })
                            }
                        </SafeSlider>
                    </ContentVisible>
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}