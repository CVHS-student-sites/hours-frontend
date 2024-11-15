import {error} from '@sveltejs/kit';

export async function load({cookies, url}) {
    const auth = cookies.get('token');

    try {
        let response = await fetch(`${url.origin}/api/auth/check-auth`, {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${auth}`,
            },
        });

        return {
            response: await response.json()
        };
    } catch (err) {
        console.error("Error getting user profile:", err);
        error(503, {
            message: 'API Origin Server Offline'
        });
    }
}