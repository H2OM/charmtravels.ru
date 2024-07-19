import '../tours.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Image from "next/image";
import Link from "next/link";

export default function Tours({data}) {
    return (
        <section className={"tours"} id={"tours"}>
            <div className="container">
                <h2 className={"static__title"}>Туры</h2>
                {
                    data && data.top !== undefined &&
                    <ContentVisible>
                        <h3 className={"static__subtitle2 tours__first"}>ТОП-4 направления бестселлера</h3>
                        <div className="static__content tours__content tours__content_top">
                            {
                                data.top.map((each, i) => {
                                    return (
                                        <div className={'tours__content__block'}
                                             style={{transition: `0.4s ${0.2 * i}s all`}}
                                             key={each.title + i}>
                                            <Image
                                                src={each.image}
                                                className={"tours__content__block__image"}
                                                alt={"image"}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className={'tours__content__block__split'}>
                                                <div>
                                                    <span className="tours__content__block__title">
                                                    {each.title}
                                                </span>
                                                    <div className="tours__content__block__text"
                                                         dangerouslySetInnerHTML={{__html: each.text}}>
                                                    </div>
                                                </div>
                                                <div className={"tours__content__block__under"}>
                                                    <span className="tours__content__block__price">
                                                        {each.price}
                                                    </span>
                                                    <Link href={"/contacts#consult"}
                                                          className={"static__link_btn"}>
                                                        подобрать тур
                                                    </Link>
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
                    data && data.exotic !== undefined &&
                    <ContentVisible>
                        <h3 className={"static__subtitle2"}>Экзотика</h3>
                        <div className="static__content tours__content">
                            {
                                data.exotic.map((each, i) => {
                                    return (
                                        <div className={'tours__content__block'}
                                             style={{transition: `0.4s ${0.2 * i}s all`}}
                                             key={each.title + i}>
                                            <Image
                                                src={each.image}
                                                className={"tours__content__block__image"}
                                                alt={"image"}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className={'tours__content__block__split'}>
                                                <div>
                                                    <span className="tours__content__block__title">
                                                    {each.title}
                                                </span>
                                                    <div className="tours__content__block__text"
                                                         dangerouslySetInnerHTML={{__html: each.text}}>
                                                    </div>
                                                </div>
                                                <div className={"tours__content__block__under"}>
                                                    <span className="tours__content__block__price">
                                                        {each.price}
                                                    </span>
                                                    <Link href={"/contacts#consult"}
                                                          className={"static__link_btn"}>
                                                        подобрать тур
                                                    </Link>
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
                    data && data.other !== undefined &&
                    <ContentVisible>
                        <h3 className={"static__subtitle2"}>Еще подборка туров</h3>
                        <div className="static__content tours__content">
                            {
                                data.other.map((each, i) => {
                                    return (
                                        <div className={'tours__content__block'}
                                             style={{transition: `0.4s ${0.2 * i}s all`}}
                                             key={each.title + i}>
                                            <Image
                                                src={each.image}
                                                className={"tours__content__block__image"}
                                                alt={"image"}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className={'tours__content__block__split'}>
                                                <div>
                                                    <span className="tours__content__block__title">
                                                    {each.title}
                                                </span>
                                                    <div className="tours__content__block__text"
                                                         dangerouslySetInnerHTML={{__html: each.text}}>
                                                    </div>
                                                </div>
                                                <div className={"tours__content__block__under"}>
                                                    <span className="tours__content__block__price">
                                                        {each.price}
                                                    </span>
                                                    <Link href={"/contacts#consult"}
                                                          className={"static__link_btn"}>
                                                        подобрать тур
                                                    </Link>
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