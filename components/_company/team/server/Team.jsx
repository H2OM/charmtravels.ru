import '../team.scss';
import {headers} from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Team(sd) {

    const host = headers().get('x-forwarded-proto') + "://" + headers().get('x-forwarded-host');

    const data = await fetch(`${host}/api/company/get-actual-team`, {method: 'GET', cache: "no-cache"})
        .then(response => {
            if (!response.ok) {
                return false;
            }

            return response.json();
        })
        .then(data => {
            if (data.content === undefined || data.content.length === 0) {
                return false;
            }

            return data;
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
    return (
        <section className={"team"} id={"team"}>
            <div className="container">
                <h2 className={"static__title"}>Наша команда</h2>
                {
                    data &&
                    <div className="team__slider">
                        <div className="team__slider__bar">
                            {
                                data.content.map((each, i) => {
                                    return (
                                        <div className={"team__slider__bar"} key={each.name + i}>
                                            <Image
                                                src={each.image}
                                                className={"team__slider__bar__image"}
                                                alt={"logo"}
                                                height={100}
                                                width={100}
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className="team__slider__bar__title">
                                                {each.name}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="team__slider__content">
                            {
                                data.content.map((each, i) => {
                                    return (
                                        <div className={"team__slider__content__item container"} key={each.name + i}>
                                            <Image
                                                src={each.image}
                                                className={"team__slider__content__item__image"}
                                                alt={"logo"}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className="team__slider__content__item__main">
                                                <div
                                                    className="team__slider__content__item__main__name">{each.name}</div>
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
                                                        <Link href={`tel:${each.number}`}>{each.number}</Link>
                                                    }
                                                    {
                                                        each.mail.length > 0 &&
                                                        <Link href={`email:${each.mail}`}>{each.mail}</Link>
                                                    }
                                                    <div className="team__slider__content__item__main__links__socs">
                                                        {
                                                            each.tg.length > 0 &&
                                                            <Link className={"static__link_svg"} href={each.tg}>

                                                            </Link>
                                                        }
                                                        {
                                                            each.wa.length > 0 &&
                                                            <Link className={"static__link_svg"} href={each.wa}>
                                                                <svg width="29" height="28" viewBox="0 0 29 28"
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
                            <button className="team__slider__content__nav__left"></button>
                            <button className="team__slider__content__nav__right"></button>
                        </div>

                    </div>
                }
                {
                    !data && <div>Error</div>
                }
            </div>
        </section>
    )
}