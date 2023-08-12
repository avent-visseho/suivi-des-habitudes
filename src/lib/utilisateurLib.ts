import {url_supabase,url_key} from '../../envHabitudes'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(url_supabase,url_key)