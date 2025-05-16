import type { PageLoad } from './$types';
import data from '$lib/data/T0003.json';

export const load: PageLoad = ({ params }) => {
    return {
        songs: {
            data: data
        }
    };
};