import {redirect} from '@sveltejs/kit';

export async function load({cookies}) {

    if (true) {
        const auth = cookies.get('token');

        let response;
        try {
            response = await fetch('http://localhost:3000/auth/check-auth', {
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
