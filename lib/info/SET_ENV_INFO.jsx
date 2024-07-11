import GET_DATA from "@/lib/GETDATA/GET_DATA";

export default async function SET_ENV_INFO() {
    const data = await GET_DATA({controller: 'contacts', action: "get-all-contacts"});

    if(data.content !== undefined) {
        process.env.address = data.content.address;
        process.env.INST =  data.content.INST;
        process.env.phone = data.content.phone;
        process.env.mail = data.content.mail;
        process.env.WA = data.content.WA;
        process.env.TG = data.content.TG;
        process.env.VK = data.content.VK;
        process.env.anketa = data.content.anketa;
        process.env.other = JSON.stringify(data.content.other);
    }
}