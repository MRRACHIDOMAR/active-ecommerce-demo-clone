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

export async function addToCartRemote(userId: string, productId: string, quantity: number, variantColor?: string) {
  const { data, error } = await supabase
    .from('cart_items')
    .upsert({
      user_id: userId,
      product_id: productId,
      quantity,
      variant_color: variantColor || null,
    }, { onConflict: 'user_id,product_id,variant_color' });
  if (error) throw error;
  return data;
}

export async function fetchCartRemote(userId: string) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*, products(title, price_cents, product_images(url))')
    .eq('user_id', userId);
  if (error) throw error;
  return data || [];
}
