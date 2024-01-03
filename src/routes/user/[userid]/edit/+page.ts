import type { PageLoad } from './$types';
import type { Profile } from '$lib/types';
import { supabaseClient } from '$lib/supabaseClient';

export const load = (async ({ params }) => {
    return await supabaseClient.from("profiles").select("*").eq("id", params.userid).single() as { data: Profile };
}) satisfies PageLoad;
