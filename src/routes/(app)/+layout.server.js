import {redirect} from "@sveltejs/kit";

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
    } catch (error) {
        console.error("Error getting user profile:", error);
        redirect(302, '/');
    }

    return {
        response: await response.json()
    };
}