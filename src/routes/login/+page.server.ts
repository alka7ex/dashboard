import { AuthApiError } from '@supabase/supabase-js';
import { redirect, type Actions, fail } from '@sveltejs/kit';

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());
        const { data, error: err } = await locals.supabase.auth.signInWithPassword({
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

