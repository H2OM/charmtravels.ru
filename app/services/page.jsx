import Tours from "@/components/_services/tours/server/Tours";
import Cruises from "@/components/_services/cruises/server/Cruises";
import Tickets from "@/components/_services/tickets/server/Tickets";
import Vises from "@/components/_services/vises/server/Vises";

export default function Page() {
    return (
        <>
            <Tours/>
            <Cruises/>
            <Tickets/>
            <Vises/>
        </>
    )
}