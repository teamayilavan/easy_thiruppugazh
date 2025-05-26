import type { PageLoad } from './$types';
import data from '$lib/list.json';

export const load: PageLoad = ({ params }) => {
    
    return {
        data:data
    };
};