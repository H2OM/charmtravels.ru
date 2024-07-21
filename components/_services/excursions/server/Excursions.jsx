import '../excursions.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Image from "next/image";
import Link from "next/link";

export default function Excursions({data}) {
    return (
        <section className={"excursions"} id={"excursions"}>
            <div className="container">
                <h2 className={"static__title"}>Экскурсии</h2>
                {
                    data &&
                    <ContentVisible>
                        <div className="excursions__content">
                            {
                                data.map((each, i) => {
                                    return (
                                        <div className="excursions__content__block"
                                            key={each.title + i}
                                            style={{transition:`0.4s ${0.2 * i}s all`}}>
                                            <Image
                                                src={each.image}
                                                className={"excursions__content__block__image"}
                                                alt={"image"}
                                                height={0}
                                                width={0}
                                                sizes="100vw"
                                                quality={100}
                                                priority={true}
                                            />
                                            <div className="static__content excursions__content__block__wrap">
                                                <div className="excursions__content__block__title">
                                                    {each.title}
                                                </div>
                                                <div className={"excursions__content__block__wrap__bottom"}>
                                                <span className={"excursions__content__block__price"}>
                                                    {each.price}
                                                </span>
                                                    <Link href={"/contacts#consult"} className={"static__link_btn"}>
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