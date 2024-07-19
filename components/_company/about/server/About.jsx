import '../about.scss';
import Image from "next/image";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default function About() {
    return (
        <section className={"about"} id={"about"}>
            <div className={"container"}>
                <h2 className={"static__title"}>О нас</h2>
                <ContentVisible>
                    <div className="about__split">
                        <div className={"static__content"}>
                            <div className={"about__manifest"}>
                                <p className={"static__subtitle"} style={{transition: "0.8s all"}}>
                                    Туристическое агентство «CHARM TRAVEL» — ваши уникальные
                                    путешествия.
                                </p>
                            </div>
                            <br/>
                            <div className={"about__manifest"}>
                                <p style={{transition: "0.8s 0.4s all"}}>У нас вы можете купить тур не выходя из дома из
                                    любой точки России.</p>
                            </div>
                            <br/>
                            <div className={"about__manifest"}>
                                <p style={{transition: "0.8s 0.8s all"}}>
                                    <span>Полное сопровождение</span> до, во время и после вашего отдыха. За каждым
                                    клиентом
                                    закрепляется
                                    персональный менеджер, который ответит на все вопросы. А также расскажет нюансы и
                                    поделится
                                    фишками,
                                    чтобы отдых прошел еще более комфортнее.
                                </p>
                            </div>
                            <br/>
                            <div className={"about__manifest"}>
                                <p style={{transition: "0.8s 1.2s all"}}>
                                    <span>Организуем туры разной сложности:</span> от бронирования гостиниц на
                                    черноморском
                                    побережье до
                                    кругосветного путешествия.
                                </p>
                            </div>
                            <br/>
                            <div className={"about__manifest"}>
                                <p style={{transition: "0.8s 1.6s all"}}>Воплотим ваши самые смелые мечты.</p>
                            </div>
                            <br/>
                            <br/>
                        </div>
                        <Image
                            src={"/logo/logo.png"}
                            className={"about__split__image"}
                            alt={"logo"}
                            height={320}
                            width={400}
                            quality={100}
                            priority={true}
                            style={{transition: "0.8s 1.6s all"}}
                        />
                    </div>
                </ContentVisible>
            </div>
        </section>
    )
}