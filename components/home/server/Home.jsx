import Image from "next/image";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import '../home.scss';
import Link from "next/link";
import HomeSlider from "@/components/home/client/HomeSlider";

export default function Home({banner}) {
    return (
        <section className={"home"}>
            <div className={"container"}>
                {
                    banner &&
                    <ContentVisible>
                        <HomeSlider length={banner.length}>
                            {
                                banner.map((each, i) => {
                                    return (
                                        <div className="home__banner__slide" key={each.title + i}>
                                            <div className="static__title"
                                                 dangerouslySetInnerHTML={{__html: each.title}}></div>
                                            <div className="static__subtitle2"
                                                 dangerouslySetInnerHTML={{__html: each.text}}></div>
                                            <Link href="/contacts#consult" className={"static__link_btn _animate"}>
                                                Консультация
                                            </Link>
                                            <Image
                                                src={each.image}
                                                className={"home__banner__slide__image"}
                                                alt={"image"}
                                                height={0}
                                                width={0}
                                                sizes={"100vw"}
                                                quality={100}
                                                priority={true}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </HomeSlider>
                    </ContentVisible>
                }
                {
                    !banner && <ErrorBlock/>
                }
            </div>
        </section>
    )
}
