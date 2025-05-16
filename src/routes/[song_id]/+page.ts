import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        post: {
            id: params.song_id
        }
    };
};