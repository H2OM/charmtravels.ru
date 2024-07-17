import '../faq.scss';
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Accordion from "@/components/_faq/faq/client/Accordion";

export default function Faq({data}) {

    return (
        <section className={"faq"}>
            <div className="container">
                <h2 className={"static__title"}>Часто задаваемые вопросы</h2>
                {
                    data &&
                    <div className={"faq__content"}>
                        {
                            data.map((each, i) => {
                                return (
                                    <Accordion key={each.title + i}>
                                        <div className="faq__accordion__title">
                                            {each.title}
                                        </div>
                                        <div className="faq__accordion__content">
                                            <p dangerouslySetInnerHTML={{__html: each.content}}></p>
                                        </div>
                                    </Accordion>
                                )
                            })
                        }
                    </div>
                }
                {
                    !data && <ErrorBlock/>
                }
            </div>
        </section>
    )
}