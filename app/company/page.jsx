import About from "@/components/_company/about/server/About";
import Team from "@/components/_company/team/server/Team";
import Advantages from "@/components/_company/achievements/server/Advantages";
import Stages from "@/components/_company/stages/server/Stages";
import Feedback from "@/components/_company/feedback/server/Feedback";
import GET_DATA from "@/lib/GETDATA/GET_DATA";
import Pick from "@/components/_company/pick/server/Pick";
import Safe from "@/components/_company/safe/server/Safe";
import Requisites from "@/components/_company/requisites/server/Requisites";
import Partners from "@/components/_company/partners/server/Partners";

export default async function Page() {

    const COMPANY_INFO = await GET_DATA({controller: 'company', action: 'get-company-info'});
    const IS_TEAM_ISSET = (COMPANY_INFO.content !== undefined && COMPANY_INFO.content.team !== undefined);
    const IS_ADV_ISSET = (COMPANY_INFO.content !== undefined && COMPANY_INFO.content.advantages !== undefined);
    const IS_STAGES_ISSET = (COMPANY_INFO.content !== undefined && COMPANY_INFO.content.stages !== undefined);
    const IS_FEEDBACK_ISSET = (COMPANY_INFO.content !== undefined && COMPANY_INFO.content.feedback !== undefined);
    const IS_PICK_ISSET = (COMPANY_INFO.content !== undefined && COMPANY_INFO.content.pick !== undefined);
    const TEAM = IS_TEAM_ISSET ? COMPANY_INFO.content.team : false;
    const ADV = IS_ADV_ISSET ? COMPANY_INFO.content.advantages : false;
    const STAGES = IS_STAGES_ISSET ? COMPANY_INFO.content.stages : false;
    const FEEDBACK = IS_FEEDBACK_ISSET ? COMPANY_INFO.content.feedback : false;
    const PICK = (IS_PICK_ISSET && COMPANY_INFO.content.pick.content !== undefined) ? COMPANY_INFO.content.pick.content : false;
    const SAFE = (IS_PICK_ISSET && COMPANY_INFO.content.pick.images !== undefined) ? COMPANY_INFO.content.pick.images : false;

    return (
        <>
            <About/>
            <Partners/>
            <Team data={TEAM}/>
            <Stages data={STAGES}/>
            <Advantages data={ADV}/>
            <Pick data={PICK}/>
            <Safe data={SAFE}/>
            <Feedback data={FEEDBACK}/>
            <Requisites/>
        </>
    )
}
