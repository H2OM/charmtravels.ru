import '../requisites.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";

export default function Requisites() {
    return (
        <section className={"requisites"} id={"requisites"}>
            <div className="container">
                <h2 className={"static__title"}>Наши реквизиты</h2>
                <ContentVisible>
                    <div className="static__content">
                        <div className={"requisites__block"} style={{transition: "0.4s all"}}>
                            <br/>
                            <p>
                                Юридический адрес организации: <span>350089, РОССИЯ, КРАСНОДАРСКИЙ КРАЙ, Г КРАСНОДАР, ПР-КТ ЧЕКИСТОВ, Д 28, КВ 25</span>
                            </p>
                            <br/>
                            <p>Полное наименование (ФИО для ИП): <span>СТАРОДУБЦЕВА СОФЬЯ ЮРЬЕВНА</span></p>
                            <br/>
                            <p>Номер в Федеральном Реестре турагентов: <span>0036068</span></p>
                            <br/>
                            <p>ОГРН(ИП): <span>323237500298410</span></p>
                            <br/>
                            <p>ИНН: <span>230820596811</span></p>
                            <br/>
                            <p>Расчетный счет: <span>40802810300004963367</span></p>
                            <br/>
                        </div>
                        <div className={"requisites__block"} style={{transition: "0.4s 0.4s all"}}>
                            <br/>
                            <p>Банк: <span>АО "ТИНЬКОФФ БАНК"</span></p>
                            <br/>
                            <p>Юридический адрес банка: <span>Москва, 127287, ул. Хуторская 2-я, д. 38А, стр. 26</span>
                            </p>
                            <br/>
                            <p>Корр.счет банка: <span>30101810145250000974</span></p>
                            <br/>
                            <p>ИНН банка: <span>7710140679</span></p>
                            <br/>
                            <p>БИК банка: <span>044525974</span></p>
                            <br/>
                        </div>
                    </div>
                </ContentVisible>
            </div>
        </section>
    )
}