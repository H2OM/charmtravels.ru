import Home from "@/components/home/server/Home";
import GET_DATA from "@/lib/GETDATA/GET_DATA";

export default async function Page() {
  const DATA = await GET_DATA({controller: 'main', action: 'get-main-info'});
  const IS_BANNER_ISSET = (DATA.content !== undefined && DATA.content.banner !== undefined);
  const BANNER = IS_BANNER_ISSET ? DATA.content.banner : false;

  return <Home banner={BANNER}/>
}
