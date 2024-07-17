import '../about.scss';
import Image from "next/image";
export default function About() {
    return (
        <section className={"about"} id={"about"}>
            <div className={"container"}>
                <h2 className={"static__title"}>О нас</h2>
                <div className="about__split">
                    <div className={"static__content"}>
                        <p className={"static__subtitle"}>
                            Туристическое агентство «CHARM TRAVEL» — ваши уникальные
                            путешествия.
                        </p>
                        <br/>
                        <p>У нас вы можете купить тур не выходя из дома из любой точки России.</p>
                        <br/>
                        <p>
                            <span>Полное сопровождение</span> до, во время и после вашего отдыха. За каждым клиентом
                            закрепляется
                            персональный менеджер, который ответит на все вопросы. А также расскажет нюансы и поделится
                            фишками,
                            чтобы отдых прошел еще более комфортнее.
                        </p>
                        <br/>
                        <p>
                            <span>Организуем туры разной сложности:</span> от бронирования гостиниц на черноморском
                            побережье до
                            кругосветного путешествия.
                        </p>
                        <br/>
                        <p>Воплотим ваши самые смелые мечты.</p>
                        <br/>
                    </div>
                    <Image
                        src={"/logo/logo.png"}
                        className={"about__split__image"}
                        alt={"logo"}
                        height={0}
                        width={0}
                        sizes="100vw"
                        quality={100}
                        priority={true}
                    />
                </div>
                <div className="about__bottom">

                </div>
            </div>
        </section>
    )
}