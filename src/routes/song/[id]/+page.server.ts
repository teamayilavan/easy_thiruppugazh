export const prerender = true

export const load: PageLoad = async ({ fetch, params }) => {
    let id = params.id
    let response = await fetch(`/data/${id}.json`)
    const data = await response.json();
    return {
        data
    };
};