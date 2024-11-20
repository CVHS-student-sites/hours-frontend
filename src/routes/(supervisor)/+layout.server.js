import {error, redirect} from '@sveltejs/kit';

export async function load({cookies, url}) {
    const auth = cookies.get('token');

    if (!auth) {
        redirect(302, '/login');
    }

    let response;
    try {
        response = await fetch(`${url.origin}/api/auth/check-auth`, {
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

    let data = await response.json();

    if (!data.signedIn) {
        redirect(302, '/login');
    }

    if (data.user.role === 'admin') {
        redirect(302, '/admin');
    }

    if (data.user.role === 'student') {
        redirect(302, '/dashboard');
    }

    return {
        response: await data
    };
}