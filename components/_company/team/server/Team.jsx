import '../team.scss';
import Image from "next/image";
import Link from "next/link";
import TeamSlider from "@/components/_company/team/client/TeamSlider";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";

export default async function Team({data}) {

    return (
        <section className={"team"} id={"team"}>
            <div className="container">
                <h2 className={"static__title"}>Наша команда</h2>
                {
                    data &&
                    <TeamSlider data={data}>
                        {
                            data.map((each, i) => {
                                return (
                                    <div className={"team__slider__content__item"} key={each.name + i}>
                                        <Image
                                            src={each.image}
                                            className={"team__slider__content__item__image"}
                                            alt={"image"}
                                            height={0}
                                            width={0}
                                            sizes="100vw"
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
                                                        <Link href={each.tg}>
                                                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M25.5298 2.61161L21.6923 22.0535C21.4025 23.4254 20.6477 23.767 19.575 23.121L13.7274 18.492L10.9062 21.4076C10.5937 21.7432 10.3331 22.0233 9.73086 22.0233L10.1514 15.6262L20.9883 5.10662C21.4597 4.65582 20.8857 4.40505 20.2562 4.85683L6.85882 13.9196L1.09111 11.9798C-0.163248 11.5593 -0.185955 10.6323 1.3527 9.9854L23.9121 0.648395C24.9567 0.227845 25.8704 0.897213 25.5298 2.61161Z"
                                                                    fill="#1d7c79"/>
                                                            </svg>
                                                        </Link>
                                                    }
                                                    {
                                                        each.wa.length > 0 &&
                                                        <Link className={"static__link_svg"} href={each.wa}>
                                                            <svg width="25" height="24" viewBox="0 0 29 28"
                                                                 fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <rect className="tgo-color" x="0.258667" width="28"
                                                                      height="28" rx="14"
                                                                      fill="#1d7c79"></rect>
                                                                <path
                                                                    d="M20.8915 17.2746L18.9337 15.3208C18.2345 14.6231 17.0458 14.9022 16.7661 15.8093C16.5563 16.4373 15.8571 16.7862 15.2278 16.6466C13.8293 16.2977 11.9414 14.4835 11.5917 13.0182C11.382 12.3902 11.8015 11.6924 12.4308 11.4831C13.3398 11.204 13.6195 10.0178 12.9203 9.32007L10.9624 7.36633C10.4031 6.87789 9.56397 6.87789 9.07451 7.36633L7.74597 8.69208C6.41742 10.0876 7.88581 13.7858 11.1722 17.0652C14.4586 20.3447 18.1645 21.8798 19.563 20.4843L20.8915 19.1585C21.381 18.6003 21.381 17.763 20.8915 17.2746Z"
                                                                    fill="white"></path>
                                                            </svg>
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
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}