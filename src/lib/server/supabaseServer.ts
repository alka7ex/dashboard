import { createClient } from '@supabase/supabase-js'
import { PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_SECRET_KEY } from '$env/static/private'


export const supabaseServer = createClient(PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_SECRET_KEY)