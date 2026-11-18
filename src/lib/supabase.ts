import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cltxlnlsgbxzsypyezbd.supabase.co';
const supabaseAnonKey = 'sb_publishable_40O8FsVgvouyCNlUeygyxg_qXrjMbJf';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function ensureAnonymousSession() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) return session.user.id;

  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) throw error;
  return data.user?.id;
}
