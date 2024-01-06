import { Auth } from '@supabase/auth-ui-svelte';
import { AuthApiError } from '@supabase/supabase-js';
import { redirect, type Actions, fail } from '@sveltejs/kit';


// export const load = (async (event) => {
//     const session = await event.locals.getSession();
//     if(session) {
//         throw redirect(302, '/');
//     }
//     return {};
// });

export const actions: Actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());
        const { data, error: err } = await locals.supabase.auth.signUp({
            email: body.email as string,
            password: body.password as string
        })

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid Email or Password'
                })
            }
            return fail(500, {
                error: 'Server Error'
            })
        }
        throw redirect(302, '/');
    }
};
