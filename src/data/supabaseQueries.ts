import { supabase } from '../lib/supabase';

export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_images(url), product_variants(*)')
    .eq('status', 'active')
    .limit(20);
  if (error) throw error;
  return data || [];
}

export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  if (error) throw error;
  return data || [];
}

export async function fetchProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_images(url), product_variants(*), sellers(name)')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}
