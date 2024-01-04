import type { PageLoad } from './$types';
import type { Property } from '$lib/typesProperty';
import { supabaseClient } from '$lib/supabaseClient';

const pageSize = 10;
const pageNumber = 1;

// Calculate the offset based on the page size and page number
const offset = (pageNumber - 1) * pageSize;

export const load = (async ({params}) => {
    return await supabaseClient
    .from("property")
    .select(
        `*`
      )
    .eq("id", params.propertyid)
    .single() as { data: Property };
}) satisfies PageLoad;

