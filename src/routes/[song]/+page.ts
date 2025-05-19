import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch, params }) => {
    let response = await fetch('/data/T0003.json')    
    const data = await response.json();
    return {
        data
    };
};