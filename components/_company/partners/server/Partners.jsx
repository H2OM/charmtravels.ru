import '../partners.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Image from "next/image";
export default function Partners() {

    const partners = [
        'anex.png',
        'taritur.png',
        'sunmar.svg',
        'space_travel.svg',
        'resot_hol.svg',
        'Pegas_Touristik_Logo.png',
        'PAC_logo_TM.png',
        'maldiviana.svg',
        'loti_blue_v2.svg',
        'logo-russkiy-ekspress.png',
        'logo-biblio-globus.png',
        'intourist-logo-png-transparent.png',
        'ics_logo.png',
        'funsun.png',
        'dolphin.svg',
        'crulClub.png',
        'coral_travel.svg',
        'cms-image-000022786.png',
        'ARTTOUR_Logo_CIAN.png',
    ];


    return (
        <section className={"partners"} id={"partners"}>
            <div className={"container"}>
                <h2 className={"static__title"}>Наши партнеры</h2>
                <ContentVisible>
                    <h3 className={"static__subtitle"}>Мы работаем только с проверенными туроператорами</h3>
                    <br/>
                    <br/>
                    <div className="static__content">
                        Вот некоторые из тех, с кем мы сотрудничаем:
                    </div>
                    <div className="partners__grid">
                        {
                            partners.map((each,i)=>{
                                return (
                                    <div className={"partners__grid__item"}
                                         style={{transition: `0.2s ${0.4 + 0.1 * i}s all`}}>
                                        <Image
                                            src={"/company/partners/"+each}
                                            className={"partners__grid__item__image"}
                                            alt={"logo"}
                                            height={0}
                                            width={0}
                                            sizes={"100vw"}
                                            quality={100}
                                            priority={true}
                                            key={each + i}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </ContentVisible>
            </div>
        </section>
    )
}