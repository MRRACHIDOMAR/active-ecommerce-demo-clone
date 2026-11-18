import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cltxlnlsgbxzsypyezbd.supabase.co';
const supabaseAnonKey = 'sb_publishable_40O8FsVgvouyCNlUeygyxg_qXrjMbJf';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
