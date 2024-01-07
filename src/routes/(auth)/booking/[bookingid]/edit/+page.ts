import type { PageLoad } from './$types';
import type { Meta } from '$lib/typesBooking';
import { supabaseClient } from '$lib/supabaseClient';

export const load = (async ({ params }) => {
    return await supabaseClient
    .from("booking")
    .select(
        `id,
        profiles(id, full_name, phone, email, city),
        purchased_price,
        created_at,
        property(id, title, address, zip_code, state, country)`
      )
    .eq("id", params.bookingid)
    .single() as { data: Meta };
}) satisfies PageLoad;

