import '../stages.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default function Stages({data}) {
    return (
        <section className={"stages"} id={"stages"}>
            <div className="container">
                <h2 className={"static__title"}>Этапы нашей работы</h2>
                <ContentVisible>
                    {
                        data && data.map((each, i) => {

                            return (
                                <div className={"stages__block"} key={i}>
                                    <div className={"stages__block__count static__title"}>{i + 1}</div>
                                    <div className="stages__block__wrap"
                                         style={{transition: `0.4s ${(2.6 / data.length) * i}s all`}}>
                                        <div className="static__subtitle">
                                            {each.title}
                                        </div>
                                        <div className="static__content"
                                             dangerouslySetInnerHTML={{__html: each.text}}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ContentVisible>
            </div>
        </section>
    )
}