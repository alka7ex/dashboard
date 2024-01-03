import type { PageLoad } from './$types';

import { supabaseClient } from '$lib/supabaseClient';

const pageSize = 10;
const pageNumber = 1;

// Calculate the offset based on the page size and page number
const offset = (pageNumber - 1) * pageSize;

export const load = (async () => {
    return await supabaseClient
    .from("property")
    .select("*")
    .range(offset, offset + pageSize - 1)
    .limit(pageSize);
}) satisfies PageLoad;
