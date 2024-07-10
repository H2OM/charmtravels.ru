import '../advantages.scss';
import ContentVisibility from "@/components/_company/achievements/client/ContentVisibility";

export default async function Advantages({data}) {



    return (
        <section className={"advantages"} id={"advantages"}>
            <div className={"container"}>
                <h2 className={"static__title"}>Наши преимущества</h2>
                <ContentVisibility>
                    {
                        data && data.map((each,i)=>{
                            return (
                                <div className={"advantages__content__block"} key={i}>
                                    <div className="advantages__content__block__title">
                                        {each.title}
                                    </div>
                                    <div className="advantages__content__block__text">
                                        {each.text}
                                    </div>
                                </div>
                            )
                        })
                    }
                </ContentVisibility>
            </div>
        </section>
    )
}