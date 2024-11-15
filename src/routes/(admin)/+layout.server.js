import {redirect} from '@sveltejs/kit';

export async function load({cookies, url}) {
    if (import.meta.env.PROD) {
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
        } catch (error) {
            console.error("Error checking authentication:", error);
            redirect(302, '/');
        }

        let data = await response.json();

        if (!data.signedIn) {
            await redirect(302, '/login');
        }

        if (data.user.role !== 'admin') {
            await redirect(302, '/dashboard');
        }

        return {props: {}};

    } else {
        return {props: {}};
    }
}