import Tours from "@/components/_services/tours/server/Tours";
import Cruises from "@/components/_services/cruises/server/Cruises";
import Hotels from "@/components/_services/hotels/server/Hotels";
import Prices from "@/components/_services/Prices/server/Prices";
import Excursions from "@/components/_services/excursions/server/Excursions";

export default function Page() {
    return (
        <>
            <Prices/>
            <Tours/>
            <Hotels/>
            <Cruises/>
            <Excursions/>
        </>
    )
}