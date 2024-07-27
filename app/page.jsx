import Home from "@/components/home/server/Home";
import GET_DATA from "@/lib/GETDATA/GET_DATA";

export default async function Page() {
  const DATA = await GET_DATA({controller: 'main', action: 'get-main-info'});
  const IS_BANNER_ISSET = (DATA.content !== undefined && DATA.content.banner !== undefined);
  const IS_HOT_ISSET = (DATA.content !== undefined && DATA.content.hot !== undefined);
  const IS_PRICES_ISSET = (DATA.content !== undefined && DATA.content.prices !== undefined);
  const IS_REVIEWS_ISSET = (DATA.content !== undefined && DATA.content.reviews !== undefined);
  const IS_ADV_ISSET = (DATA.content !== undefined && DATA.content.advantages !== undefined);
  const BANNER = IS_BANNER_ISSET ? DATA.content.banner : false;
  const HOT = IS_HOT_ISSET ? DATA.content.hot : false;
  const PRICES = IS_PRICES_ISSET ? DATA.content.prices : false;
  const REVIEWS = IS_REVIEWS_ISSET ? DATA.content.reviews : false;
  const ADV = IS_ADV_ISSET ? DATA.content.advantages : false;

  return (
      <Home
        banner={BANNER}
        hot={HOT}
        prices={PRICES}
        reviews={REVIEWS}
        advantages={ADV}
      />
  )
}
