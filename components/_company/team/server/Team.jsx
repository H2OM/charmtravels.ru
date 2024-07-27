import '../team.scss';
import Image from "next/image";
import Link from "next/link";
import TeamSlider from "@/components/_company/team/client/TeamSlider";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default async function Team({data}) {

    return (
        <section className={"team"} id={"team"}>
            <div className="container">
                <h2 className={"static__title"}>Наша команда</h2>
                {
                    data &&
                    <ContentVisible>
                        <TeamSlider data={data}>
                            {
                                data.map((each, i) => {
                                    return (
                                        <div className={"team__slider__content__item"} key={each.name + i}>
                                            <Image
                                                src={each.image}
                                                className={"team__slider__content__item__image"}
                                                alt={"image"}
                                                height={450}
                                                width={450}
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className="team__slider__content__item__main">
                                                <Image
                                                    src={"/svg/double-dot.svg"}
                                                    className="team__slider__content__item__main__svg"
                                                    alt={"-"}
                                                    height={16}
                                                    width={16}
                                                    quality={100}
                                                    priority={true}
                                                />
                                                <div
                                                    className="static__title">{each.name}</div>
                                                <div className="team__slider__content__item__main__titles">
                                                    {
                                                        Array.isArray(each.titles) && each.titles.map((title, i) => {
                                                            return (
                                                                <div key={title + i}
                                                                     className={"team__slider__content__item__main__titles__title"}>
                                                                    {title}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        typeof (each.titles) === "string" &&
                                                        <div
                                                            className={"team__slider__content__item__main__titles__title"}>
                                                            {each.titles}
                                                        </div>
                                                    }
                                                </div>
                                                <div className="team__slider__content__item__main__describe"
                                                     dangerouslySetInnerHTML={{__html: each.description}}>
                                                </div>
                                                <div className="team__slider__content__item__main__links">
                                                    {
                                                        each.number.length > 0 &&
                                                        <Link href={`tel:${each.number}`}
                                                              className={"static__link"}>
                                                            {each.number}
                                                        </Link>
                                                    }
                                                    {
                                                        each.mail.length > 0 &&
                                                        <Link href={`mailto:${each.mail}`}
                                                              className={"static__link"}>
                                                            {each.mail}
                                                        </Link>
                                                    }
                                                    <div className="team__slider__content__item__main__links__socs">
                                                        {
                                                            each.tg.length > 0 &&
                                                            <Link className={"static__link_svg"} href={each.tg}>
                                                                <Image
                                                                    src={"/svg/TG.svg"}
                                                                    alt={"TG"}
                                                                    height={24}
                                                                    width={24}
                                                                    quality={100}
                                                                    priority={true}
                                                                />
                                                            </Link>
                                                        }
                                                        {
                                                            each.wa.length > 0 &&
                                                            <Link className={"static__link_svg"} href={each.wa}>
                                                                <Image
                                                                    src={"/svg/WA.svg"}
                                                                    alt={"TG"}
                                                                    height={24}
                                                                    width={25}
                                                                    quality={100}
                                                                    priority={true}
                                                                />
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TeamSlider>
                    </ContentVisible>
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}