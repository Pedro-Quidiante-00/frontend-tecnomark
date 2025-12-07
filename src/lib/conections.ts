const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL || 'https://astro-backend-yryd.onrender.com/api';

export const STRAPI_BASE_URL = strapiUrl.replace('/api', '');
export const STRAPI_URL = strapiUrl;

export const fetchFromAPI = async (slug: string) => {
    try {
        const response = await fetch(`${STRAPI_URL}/${slug}?populate=*`);
        const json = await response.json();

        if(!response.ok) {
            throw new Error('El error', json.message);
        }

        return json.data;
    } catch (error) {
        console.error(error);
    }
};