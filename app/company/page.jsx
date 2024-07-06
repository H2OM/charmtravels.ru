import About from "@/components/_company/about/server/About";
import Team from "@/components/_company/team/server/Team";
import Achievements from "@/components/_company/achievements/server/Achievements";
import Stages from "@/components/_company/stages/server/Stages";
import Feedback from "@/components/_company/feedback/server/Feedback";

export default function Page() {

    return (
        <>
            <About/>
            <Team/>
            <Achievements/>
            <Stages/>
            <Feedback/>
        </>
    )
}
