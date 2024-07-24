import {headers} from "next/headers";

export default async function GET_DATA({controller, action, cache= "no-cache"}) {

    const host = headers().get('x-forwarded-proto') + "://" + headers().get('x-forwarded-host');

    return await fetch(`${host}/api/${controller}/${action}`, {method: 'GET', cache: cache})
        .then(response => {
            if (!response.ok) {
                return false;
            }

            return response.json();
        })
        .then(data => {
            if (data.content === undefined || data.content.length === 0) {
                return false;
            }

            return data;
        })
        .catch((e) => {
            return false;
        });
}