import '../reviews.scss';
import Image from "next/image";
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import ReviewsSlider from "@/components/_company/reviews/client/ReviewsSlider";

export default function Reviews({data}) {
    return (
        <section className={"reviews"} id={"reviews"}>
            <div className="container">
                <h2 className={"static__title"}>Отзывы</h2>
                <ContentVisible>
                    <div className="reviews__text static__content">
                        Для нас самое важное - это ваши счастливые воспоминания от отдыха. Благодарим, за обратную
                        связь!
                    </div>
                    {
                        data && <ReviewsSlider length={data.length}>
                            {
                                data.map((each, i) => {
                                    return (
                                        <div className={"reviews__slider__block"}
                                             key={i + each.title}
                                             style={{transition: `0.4s ${0.2 * i}s all`}}
                                        >
                                            <Image
                                                src={each.image}
                                                className={"reviews__slider__block__image"}
                                                alt={"image"}
                                                height={550}
                                                width={360}
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
                        </ReviewsSlider>
                    }
                    {
                        !data && <ErrorBlock/>
                    }
                </ContentVisible>
                <ContentVisible>
                    <div className="reviews__2gis">
                        <div className="reviews__2gis__text static__subtitle2">
                            У нас так же есть отзывы в 2ГИС
                        </div>
                        <iframe src="https://swdgts.ru/28fee229f7491c4f23998bfa50d288bb"
                                className={"reviews__2gis__content"}
                                width="100%"
                                height="300"
                                frameBorder="0">
                        </iframe>
                    </div>
                </ContentVisible>
            </div>
        </section>
    )
}