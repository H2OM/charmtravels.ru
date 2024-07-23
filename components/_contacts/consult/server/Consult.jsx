import '../consult.scss';
import ContentVisible from "@/lib/basecomponents/contentVisible/contentVisible";
import Form from "@/components/_contacts/consult/client/Form";

export default function Consult() {
    return (
        <section className={"consult"} id={"consult"}>
            <div className="container">
                <h2 className={"static__title"}>Консультация</h2>
                <ContentVisible>
                    <Form/>
                </ContentVisible>
            </div>
        </section>
    )
}