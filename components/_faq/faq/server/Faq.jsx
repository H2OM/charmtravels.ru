import '../faq.scss';
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import Accordion from "@/components/_faq/faq/client/Accordion";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Consult from "@/components/_contacts/consult/server/Consult";

export default function Faq({data}) {
    const firstColumn = data.slice(0, Math.ceil(data.length / 2));
    const secondColumn = data.slice(Math.ceil(data.length / 2));

    return (
        <section className={"faq"}>
            <div className="container">
                <h2 className={"static__title"}>Часто задаваемые вопросы</h2>
                {
                    data &&
                    <ContentVisible>
                        <div className={"faq__content"}>
                            <div className="faq__content__column">
                                {
                                    firstColumn.map((each, i) => {
                                        return (
                                            <Accordion content={each.content}
                                                       key={each.title + i}
                                                       transition={`0.4s ${0.2 * i}s all`}>
                                                <div className="faq__accordion__title">
                                                    {each.title}
                                                </div>
                                            </Accordion>
                                        )
                                    })
                                }
                            </div>
                            <div className="faq__content__column">
                                {
                                    secondColumn.map((each, i) => {
                                        return (
                                            <Accordion content={each.content}
                                                       key={each.title + i}
                                                       transition={`0.4s ${(firstColumn.length * 0.2) + (0.2 * i)}s all`}>
                                                <div className="faq__accordion__title">
                                                    {each.title}
                                                </div>
                                            </Accordion>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </ContentVisible>
                }
                {
                    !data && <ErrorBlock/>
                }
                <Consult/>
            </div>
        </section>
    )
}