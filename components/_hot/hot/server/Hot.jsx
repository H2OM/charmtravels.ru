import '../hot.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Image from "next/image";
import Link from "next/link";

export default function Hot({data}) {
    return (
        <section className={"hot"}>
            <div className="container">
                <h2 className={"static__title"}>Горящие туры</h2>
                {
                    data &&
                    <ContentVisible>
                        <div className="hot__content">
                            {
                                data.map((each, i) => {
                                    return (
                                        <div className={"hot__content__block"}
                                             key={each.title + i}
                                             style={{transition: `0.4s ${0.2 * i}s all`}}>
                                            <Image
                                                src={each.image}
                                                className={"hot__content__block__image"}
                                                alt={"logo"}
                                                height={350}
                                                width={600}
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className="hot__content__block__split">
                                                <div className="hot__content__block__split__title static__subtitle2">
                                                    {each.title}
                                                </div>
                                                <span className={"hot__content__block__split__prompt"}>
                                                    Цена на текущий момент:
                                                </span>
                                                <div className={"hot__content__block__split__price static__subtitle"}>
                                                    {each.price}
                                                </div>
                                                <Link href={"/contacts#consult"} className="static__link_btn _animate">
                                                    Консультация
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </ContentVisible>
                }
                {
                    !data && <ErrorBlock/>
                }
                <ContentVisible>
                    <div className="hot__banner">
                        <Image
                            src={"/other/messenger.png"}
                            className={"hot__banner__image"}
                            alt={"logo"}
                            height={450}
                            width={265}
                            quality={100}
                            priority={true}
                        />
                        <div className="hot__banner__split">
                            <div className="static__title">Подключитесь к ленте горящих туров</div>
                            <div className="static__subtitle2">В своем мессенджере</div>
                            <div className="hot__banner__split__under">
                                <Link href={'https://t.me/charmtravelhot'} className={"static__link_btn _animate _pN"} target={"_blank"}>Telegram</Link>
                                <Link href={'https://chat.whatsapp.com/Hg9wPPEoLH9095eOlG3SaE'} className={"static__link_btn _animate _pN"} target={"_blank"}>WhatsApp</Link>
                            </div>
                        </div>
                    </div>
                </ContentVisible>
            </div>
        </section>
    )
}
