import '../cruises.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Image from "next/image";
import Link from "next/link";

export default function Cruises({data}) {
    return (
        <section className={"cruises"} id={"cruises"}>
            <div className="container">
                <h2 className={"static__title"}>Круизы</h2>

                {
                    data &&
                    <ContentVisible>
                        {
                            <div className={"cruises__content"}>
                                <Image
                                    src={data.image}
                                    className={"cruises__content__image"}
                                    alt={"image"}
                                    height={400}
                                    width={600}
                                    quality={100}
                                    priority={true}
                                />
                                <div className={"cruises__content__wrap static__content"}>
                                    <div className="static__subtitle">
                                        {data.title}
                                    </div>
                                    <Image
                                        src={"/svg/double-dot.svg"}
                                        className="cruises__content__svg"
                                        alt={"-"}
                                        height={16}
                                        width={16}
                                        quality={100}
                                        priority={true}
                                    />
                                    <div className={"cruises__content__text"}
                                         dangerouslySetInnerHTML={{__html: data.text}}></div>
                                    <div className={"cruises__content__bottom"}>
                                        <span className={"static__subtitle"}>{data.price}</span>
                                        <Link href={"/contacts#consult"} className={"static__link_btn"}>подобрать тур</Link>
                                    </div>
                                </div>
                            </div>
                        }
                    </ContentVisible>
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}