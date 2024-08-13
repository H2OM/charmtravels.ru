import '../prices.scss';
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default function Prices({data}) {
    return (
        <section className={"prices _mpt"} id={"prices"}>
            <div className="container">
                <h2 className={"static__title"}>Цены</h2>
                <ContentVisible>
                    {
                        data && data.prices !== undefined &&
                        <div className="prices__content">
                            {
                                data.prices.map((each, i) => {
                                    return (
                                        <div
                                            className={"static__content prices__content__block " + (each.isSub ? "prices__content__block_sub" : "")}
                                            key={each.title + i}
                                            style={{transition: `0.4s ${0.2 * (i+1)}s all`}}>
                                            <div className="prices__content__block__title static__subtitle"
                                                 style={{transition:`0.4s ${0.2 * i}s all`}}>
                                                {each.title}
                                            </div>
                                            <span className="prices__content__block__price static__subtitle"
                                                  style={{transition:`0.4s ${0.2 * i}s all`}}>
                                                {each.price}
                                            </span>
                                            <div className="prices__content__block__text"
                                                 dangerouslySetInnerHTML={{__html: each.text}}
                                                 style={{transition:`0.4s ${0.2 * i}s all`}}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </ContentVisible>
                <ContentVisible>
                    {
                        data && data.inPrices !== undefined &&
                        <>
                            <h3 className="static__subtitle prices__inprices__title">В стоимость пакетных туров
                                входит</h3>
                            <div className="prices__inprices__content">
                                {
                                    data.inPrices.map((each, i) => {
                                        return (
                                            <div className={"prices__inprices__block"}
                                                 key={each + i}
                                                 style={{transition: `0.4s ${0.2 * i}s all`}}>
                                                <div className={"prices__inprices__block__number"}>{i + 1}</div>
                                                <div className="static__content prices__inprices__block__text"
                                                     dangerouslySetInnerHTML={{__html: each}}></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                    {
                        !data && <ErrorBlock/>
                    }
                </ContentVisible>
            </div>
        </section>
    )
}