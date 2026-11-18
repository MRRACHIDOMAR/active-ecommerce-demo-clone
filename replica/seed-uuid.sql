-- Updated seed with proper UUIDs for Active Ecommerce Demo Clone
-- Run after schema.sql

INSERT INTO public.categories (id, name, slug, image_url, is_featured) VALUES
  (gen_random_uuid(), 'Women Clothing & Fashion', 'women-clothing', 'https://picsum.photos/id/64/200/200', true),
  (gen_random_uuid(), 'Men Clothing & Fashion', 'men-clothing', 'https://picsum.photos/id/1012/200/200', true),
  (gen_random_uuid(), 'Computer & Accessories', 'computers', 'https://picsum.photos/id/180/200/200', false),
  (gen_random_uuid(), 'Automobile & Motorcycle', 'auto', 'https://picsum.photos/id/111/200/200', false)
ON CONFLICT DO NOTHING;

INSERT INTO public.sellers (id, name, is_in_house) VALUES
  (gen_random_uuid(), 'In House', true)
ON CONFLICT DO NOTHING;

INSERT INTO public.products (title, slug, description, price_cents, discounted_price_cents, brand, status, is_featured, is_flash_deal)
SELECT 'Large Sherpa Tote Bag', 'sherpa-tote', 'Comfortable everyday tote with soft sherpa exterior.', 7212, 6500, 'Demo Brand', 'active', true, true
WHERE NOT EXISTS (SELECT 1 FROM public.products WHERE slug = 'sherpa-tote');

INSERT INTO public.products (title, slug, description, price_cents, discounted_price_cents, brand, status, is_featured)
SELECT 'Wireless Noise-Cancelling Headphones', 'headphones', 'Premium sound with long battery life.', 12999, 11999, 'Demo Audio', 'active', true
WHERE NOT EXISTS (SELECT 1 FROM public.products WHERE slug = 'headphones');

CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (status = 'active');
CREATE POLICY "Public read product_images" ON public.product_images FOR SELECT USING (true);
CREATE POLICY "Public read product_variants" ON public.product_variants FOR SELECT USING (true);
CREATE POLICY "Users manage own cart" ON public.cart_items FOR ALL USING (auth.uid() = user_id);
