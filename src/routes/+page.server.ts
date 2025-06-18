import data from '$lib/list.json';
export const prerender = true


export const load = () => {
    return {
        data: data
    };
};