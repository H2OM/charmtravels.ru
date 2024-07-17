import Faq from "@/components/_faq/faq/server/Faq";
import GET_DATA from "@/lib/GETDATA/GET_DATA";

export default async function Page() {
    let data = await GET_DATA({controller: 'faq', action: 'get-faq'});
    data = data.content !== undefined ? data.content : false;

    return <Faq data={data}/>
}