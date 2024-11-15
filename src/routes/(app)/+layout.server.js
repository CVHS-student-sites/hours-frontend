import { error } from '@sveltejs/kit';

export async function load({cookies}) {
    const auth = cookies.get('token');

    let response;
    try {
        response = await fetch('http://localhost:3000/auth/check-auth', {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${auth}`,
            },
        });
    } catch (err) {
        console.error("Error getting user profile:", err);
        error(503, {
            message: 'API Origin Server Offline'
        });
    }


    return {
        response: await response.json()
    };
}