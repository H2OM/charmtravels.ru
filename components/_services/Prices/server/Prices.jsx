import '../prices.scss';
import ErrorBlock from "@/lib/basecomponents/errorblock/ErrorBlock";

export default function Prices({data}) {
    return (
        <section className={"prices"} id={"prices"}>
            <div className="container">
                <h2 className={"static__title"}>Цены</h2>
                {
                    data && data.prices !== undefined &&
                    <div className="prices__content">
                        {
                            data.prices.map((each, i) => {
                                return (
                                    <div
                                        className={"static__content prices__content__block " + (each.isSub ? "prices__content__block_sub" : "")}
                                        key={each.title + i}>
                                        <div
                                            className="prices__content__block__title static__subtitle">{each.title}</div>
                                        <span className="prices__content__block__price static__subtitle">{each.price}</span>
                                        <div className="prices__content__block__text"
                                             dangerouslySetInnerHTML={{__html: each.text}}></div>

                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {
                    data && data.inPrices !== undefined &&
                    <>
                        <h3 className="static__subtitle prices__inprices__title">В стоимость пакетных туров входит</h3>
                        <div className="prices__inprices__content">
                            {
                                data.inPrices.map((each, i) => {
                                    return (
                                        <div className={"prices__inprices__block"} key={each + i}
                                             dangerouslySetInnerHTML={{__html: each}}>
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
            </div>
        </section>
    )
}