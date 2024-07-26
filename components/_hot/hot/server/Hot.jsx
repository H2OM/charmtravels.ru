import '../hot.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Image from "next/image";

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
                                                <div className="static__link_btn">
                                                    Консультация
                                                </div>
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
            </div>
        </section>
    )
}
