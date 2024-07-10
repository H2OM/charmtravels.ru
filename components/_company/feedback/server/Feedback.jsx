import '../feedback.scss';
import FeedbackSlider from "@/components/_company/feedback/client/FeedbackSlider";
import Image from "next/image";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";

export default function Feedback({data}) {
    return (
        <section className={"feedback"} id={"feedback"}>
            <div className="container">
                <h2 className={"static__title"}>Отзывы</h2>
                <div className="static__content">
                    Для нас самое важное - это ваши счастливые воспоминания от отдыха. Благодарим, за обратную связь!
                </div>
                {
                    data && <FeedbackSlider length={data.length}>
                    {
                        data.map((each, i) => {
                            return (
                                <div className={"feedback__slider__block"} key={i + each.title}>
                                    <Image
                                        src={each.image}
                                        className={"feedback__slider__block__image"}
                                        alt={"image"}
                                        height={0}
                                        width={0}
                                        sizes={"100vw"}
                                        quality={100}
                                        priority={true}
                                    />
                                    <div className="static__content"
                                         dangerouslySetInnerHTML={{__html: each.title}}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </FeedbackSlider>
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}