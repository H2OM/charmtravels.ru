import '../pick.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Image from "next/image";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import PickSlider from "@/components/_company/pick/client/PickSlider";

export default async function Pick({data}) {

    return (
        <section className={"pick"} id={"pick"}>
            <div className={"container"}>
                <h2 className={"static__title"}>Почему нас выбирают</h2>
                {
                    data && data.content !== undefined && data.images !== undefined &&
                    <ContentVisible>
                        <div className={"pick__content"}>
                            {
                                data.content.map((each, i) => {
                                    return (
                                        <div className={"pick__block"} key={i} style={{
                                            gridColumn: ((i === data.content.length - 1 && data.content.length % 2 !== 0) ? "1/3" : "")
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
                        <PickSlider length={data.images.length}>
                            {
                                data.images.map((each, i) => {
                                    return (
                                        <Image
                                            src={each}
                                            className="pick__images__image"
                                            alt={"image"}
                                            height={600}
                                            width={600}
                                            quality={100}
                                            priority={true}
                                            key={each + i}
                                        />
                                    )
                                })
                            }
                        </PickSlider>
                    </ContentVisible>
                }
                {
                    (!data || data.content === undefined || data.images === undefined) && <ErrorBlock/>
                }
            </div>
        </section>
    )
}