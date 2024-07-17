import Tours from "@/components/_services/tours/server/Tours";
import Cruises from "@/components/_services/cruises/server/Cruises";
import Hotels from "@/components/_services/hotels/server/Hotels";
import Prices from "@/components/_services/prices/server/Prices";
import Excursions from "@/components/_services/excursions/server/Excursions";
import GET_DATA from "@/lib/GETDATA/GET_DATA";

export default async function Page() {

    const SERVICES = await GET_DATA({controller: 'services', action: 'get-all-services'});
    const IS_PRICES_ISSET = (SERVICES.content !== undefined && SERVICES.content.prices !== undefined);
    const IS_CRUISES_ISSET = (SERVICES.content !== undefined && SERVICES.content.cruises !== undefined);
    const IS_TOURS_ISSET = (SERVICES.content !== undefined && SERVICES.content.tours !== undefined);
    const IS_EXCURSIONS_ISSET = (SERVICES.content !== undefined && SERVICES.content.excursions !== undefined);
    const PRICES = IS_PRICES_ISSET ? SERVICES.content.prices : false;
    const CRUISES = IS_CRUISES_ISSET ? SERVICES.content.cruises : false;
    const TOURS = IS_TOURS_ISSET ? SERVICES.content.tours : false;
    const EXCURSIONS = IS_EXCURSIONS_ISSET ? SERVICES.content.excursions : false;

    return (
        <>
            <Prices data={PRICES}/>
            <Tours data={TOURS}/>
            <Hotels/>
            <Cruises data={CRUISES}/>
            <Excursions data={EXCURSIONS}/>
        </>
    )
}