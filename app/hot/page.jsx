import Hot from "@/components/_hot/hot/server/Hot";
import GET_DATA from "@/lib/GETDATA/GET_DATA";


export default async function Page() {
    const DATA = await GET_DATA({controller: 'services', action: 'get-hot'});
    const IS_HOT_ISSET = DATA.content !== undefined;
    const HOT = IS_HOT_ISSET ? DATA.content : false;

    return <Hot data={HOT}/>
}