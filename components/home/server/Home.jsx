import Image from "next/image";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import '../home.scss';
import Link from "next/link";
import HomeSlider from "@/components/home/client/HomeSlider";
import Hot from "@/components/_hot/hot/server/Hot";
import Prices from "@/components/_services/prices/server/Prices";
import Advantages from "@/components/_company/achievements/server/Advantages";
import Consult from "@/components/_contacts/consult/server/Consult";
import Reviews from "@/components/_company/reviews/server/Reviews";

export default function Home({banner, hot, prices, reviews, advantages}) {
    const promoOne = [
        {
            image: '/home/promo/planet.svg',
            imageW: 46,
            imageH: 46,
            title: 'Выбрать параметры вашего путешествия'
        },
        {
            image: '/home/promo/plane.svg',
            imageW: 44,
            imageH: 44,
            title: 'Выбрать тур и оформить заказ'
        },
        {
            image: '/home/promo/ticket.svg',
            imageW: 46,
            imageH: 34,
            title: 'Оплатить тур онлайн или в агентстве'
        },
        {
            image: '/home/promo/sun.svg',
            imageW: 50,
            imageH: 43,
            title: 'Получить подтверждение брони и комплект документов'
        },
        {
            image: '/home/promo/bag.svg',
            imageW: 39,
            imageH: 47,
            title: 'Собрать чемодан и насладиться отдыхом'
        }
    ];


    return (
        <section className={"home"}>
            <div className={"container"}>
                {
                    banner &&
                    <HomeSlider length={banner.length}>
                        {
                            banner.map((each, i) => {
                                return (
                                    <div className="home__banner__slide" key={each.title + i}>
                                        <div className="static__title"
                                             dangerouslySetInnerHTML={{__html: each.title}}></div>
                                        <div className="static__subtitle2"
                                             dangerouslySetInnerHTML={{__html: each.text}}></div>
                                        <Link href="/contacts#consult" className={"static__link_btn _animate"}>
                                            Консультация
                                        </Link>
                                        <Image
                                            src={each.image}
                                            className={"home__banner__slide__image"}
                                            alt={"image"}
                                            height={0}
                                            width={0}
                                            sizes={"100vw"}
                                            quality={100}
                                            priority={true}
                                        />
                                    </div>
                                )
                            })
                        }
                    </HomeSlider>
                }
                {
                    !banner && <ErrorBlock/>
                }
            </div>
            <Hot data={hot}/>
            <Prices data={prices}/>
            <Advantages data={advantages}/>
            <section className={"promo-one"}>
                <div className="container">
                    <h2 className={"static__title"}>Как забронировать тур</h2>
                    <ContentVisible>
                        <div className="promo-one__content">
                            {
                                promoOne.map((each, i) => {
                                    return (
                                        <div className="promo-one__content__block"
                                             key={each.image + i}
                                        style={{transition: `0.4s ${0.2 * i}s all`}}>
                                            <div className="promo-one__content__block__split">
                                                <Image
                                                    src={each.image}
                                                    className={"promo-one__content__block__image"}
                                                    alt={"image"}
                                                    height={each.imageH}
                                                    width={each.imageW}
                                                    quality={100}
                                                    priority={true}
                                                />
                                                <div className="static__content">
                                                    {each.title}
                                                </div>
                                            </div>
                                            <div className="promo-one__content__block__number">0{i + 1}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="promo-one__content__block _last"
                                 style={{transition: `0.4s ${0.2 * promoOne.length}s all`}}>
                                <div className="static__content">
                                    Оформите заявку уже сейчас, это удобно!
                                </div>
                            </div>
                        </div>
                    </ContentVisible>
                </div>
            </section>
            <Reviews data={reviews}/>
            <section className={"promo-two"}>
                <div className="container">
                    <ContentVisible>
                        <div className="promo-two__content">
                            <div className="promo-two__content__big"
                                 style={{transition: `0.4s 0.2s all`}}>
                                <div className={"static__content"}>Не знаете, куда поехать?</div>
                                <div className="static__title">
                                    Доверьте подбор тура профессионалам!
                                </div>
                            </div>
                            <Image
                                src={'/other/image.png'}
                                className={"promo-two__content__block"}
                                alt={"image"}
                                height={200}
                                width={400}
                                quality={100}
                                priority={true}
                                style={{transition: `0.4s 0.4s all`}}
                            />
                            <Image
                                src={'/other/form.png'}
                                className={"promo-two__content__block"}
                                alt={"image"}
                                height={200}
                                width={400}
                                quality={100}
                                priority={true}
                                style={{transition: `0.4s 0.6s all`}}
                            />
                            <Image
                                src={'/other/image2.png'}
                                className={"promo-two__content__block"}
                                alt={"image"}
                                height={200}
                                width={400}
                                quality={100}
                                priority={true}
                                style={{transition: `0.4s 0.8s all`}}
                            />
                            <Image
                                src={'/services/tours/maldivs.png'}
                                className={"promo-two__content__block"}
                                alt={"image"}
                                height={200}
                                width={400}
                                quality={100}
                                priority={true}
                                style={{transition: `0.4s 1s all`}}
                            />
                        </div>
                    </ContentVisible>
                </div>
            </section>
            <section className={"main-contacts _mpt"}>
                <div className="container">
                    <h2 className={"static__title"}>С нами удобно связаться!</h2>
                    <ContentVisible>
                        <div className="main-contacts__bar">
                            <div className="main-contacts__bar__block">
                                <Image
                                    src={'/home/contacts/phone.svg'}
                                    className={"main-contacts__bar__block__svg"}
                                    alt={"image"}
                                    height={60}
                                    width={60}
                                    quality={100}
                                    priority={true}
                                />
                                <div className="main-contacts__bar__block__split">
                                    <Link className={"static__link"} href={`tel:${process.env.phone}`}>
                                        {process.env.phone}
                                    </Link>
                                    <span>
                                        Телефон для связи
                                    </span>
                                </div>
                            </div>
                            <div className="main-contacts__bar__block">
                                <Image
                                    src={'/home/contacts/mail.svg'}
                                    className={"main-contacts__bar__block__svg"}
                                    alt={"image"}
                                    height={60}
                                    width={60}
                                    quality={100}
                                    priority={true}
                                />
                                <div className="main-contacts__bar__block__split">
                                    <Link className={"static__link"} href={`email:${process.env.mail}`}>
                                        {process.env.mail}
                                    </Link>
                                    <span>
                                        Электронная почта
                                    </span>
                                </div>
                            </div>
                            <div className="main-contacts__bar__block">
                                <Image
                                    src={'/home/contacts/address.svg'}
                                    className={"main-contacts__bar__block__svg"}
                                    alt={"image"}
                                    height={60}
                                    width={60}
                                    quality={100}
                                    priority={true}
                                />
                                <div className="main-contacts__bar__block__split">
                                    <div className={"static__link"}>
                                        {process.env.address}
                                    </div>
                                    <span>
                                        Адрес
                                    </span>
                                </div>
                            </div>
                        </div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A64a179e6d9e282e9aaa606bc7d07ab40c38d8d5611ab5856ae2188f14ea5efc1&amp;source=constructor&scroll=false"
                            width="100%" height="504" frameBorder="0" style={{borderRadius: "16px"}}></iframe>
                    </ContentVisible>
                </div>
            </section>
            <Consult/>
        </section>
    )
}
