import '../advantages.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default async function Advantages({data}) {

    return (
        <section className={"advantages"} id={"advantages"}>
            <div className={"container"}>
                <h2 className={"static__title"}>Наши преимущества</h2>
                <ContentVisible>
                    {
                        data && data.map((each,i)=>{
                            return (
                                <div className={"advantages__block"} key={i} style={{transition: `0.4s ${0.2 * i}s all`}}>
                                    <div className={"advantages__block__count"}>{`${i + 1}.`.padStart(3, '0')}</div>
                                    <div className="advantages__block__wrap">
                                        <div className="static__subtitle">
                                            {each.title}
                                        </div>
                                        <div className="static__content"
                                             dangerouslySetInnerHTML={{__html: each.text}}>
                                        </div>
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