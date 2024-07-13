import '../pick.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Image from "next/image";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";

export default async function Pick({data}) {

    return (
        <section className={"pick"} id={"pick"}>
            <div className={"container"}>
                <h2 className={"static__title"}>Почему нас выбирают</h2>
                {
                    data &&
                    <ContentVisible>
                        <div className={"pick__content"}>
                            {
                                data.map((each, i) => {
                                    return (
                                        <div className={"pick__block"} key={i} style={{
                                            gridColumn: ((i === data.length - 1 && data.length % 2 !== 0) ? "1/3" : "")
                                        }}>
                                            <div className="pick__block__wrap"
                                                 style={{transition: `0.6s ${0.2 * i}s all`,}}>
                                                <div className="static__subtitle">
                                                    {each.title}
                                                </div>
                                                <Image
                                                    src={"/svg/double-dot.svg"}
                                                    className="pick__block__wrap__svg"
                                                    alt={"-"}
                                                    height={16}
                                                    width={16}
                                                    quality={100}
                                                    priority={true}
                                                />
                                                <div className="static__content"
                                                     dangerouslySetInnerHTML={{__html: each.text}}>
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