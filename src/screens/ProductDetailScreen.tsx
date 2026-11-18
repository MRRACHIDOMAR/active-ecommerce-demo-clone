import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useCart } from '../context/CartContext';
import { fetchProductById } from '../data/supabaseQueries';

export function ProductDetailScreen({ route }: any) {
  const initialProduct = route.params?.product || {
    id: 'demo',
    title: 'Large Sherpa Tote Bag',
    price: 72.12,
    rating: 4.5,
    reviewCount: 9,
    brand: 'Demo Brand',
    seller: 'In House',
    colors: ['Beige', 'Black', 'Maroon'],
    images: ['https://picsum.photos/id/1011/400/400'],
    description: 'Comfortable everyday tote.',
  };
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || 'Default');
  const { addItem } = useCart();

  useEffect(() => {
    if (initialProduct.id && initialProduct.id !== 'demo' && !initialProduct.images) {
      setLoading(true);
      fetchProductById(initialProduct.id)
        .then((data) => {
          setProduct({
            id: data.id,
            title: data.title,
            price: data.price_cents / 100,
            rating: data.rating_avg || 0,
            reviewCount: data.review_count || 0,
            brand: data.brand || 'Demo',
            seller: data.sellers?.name || 'In House',
            colors: data.product_variants?.map((v: any) => v.color) || [],
            images: data.product_images?.map((i: any) => i.url) || [],
            description: data.description || '',
          });
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [initialProduct.id]);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      color: selectedColor,
      image: product.images?.[0] || 'https://picsum.photos/id/1011/400/400',
    });
    Alert.alert('Added', 'Item added to cart');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF4D00" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.images?.[0] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.ratingRow}>
          <Text>★★★★★</Text>
          <Text style={styles.muted}> ({product.reviewCount || 0})</Text>
        </View>
        <Text style={styles.price}>${product.price?.toFixed(2)}/pc</Text>
        <Text style={styles.label}>Brand : <Text style={styles.bold}>{product.brand}</Text></Text>
        <Text style={styles.label}>Seller : <Text style={styles.bold}>{product.seller}</Text></Text>

        {product.colors?.length > 0 && (
          <>
            <Text style={styles.section}>Color</Text>
            <View style={styles.colors}>
              {product.colors.map((c: string) => (
                <TouchableOpacity
                  key={c}
                  style={[styles.colorDot, selectedColor === c && styles.colorSelected]}
                  onPress={() => setSelectedColor(c)}
                />
              ))}
            </View>
          </>
        )}

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btnPrimary} onPress={handleAddToCart}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondary} onPress={handleAddToCart}>
            <Text style={styles.btnText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  content: { padding: 16 },
  title: { fontSize: 18, fontWeight: '700', color: '#1F2937' },
  ratingRow: { flexDirection: 'row', marginVertical: 8 },
  muted: { color: '#6B7280' },
  price: { fontSize: 20, fontWeight: '700', color: '#FF4D00', marginVertical: 8 },
  label: { marginVertical: 4, color: '#1F2937' },
  bold: { fontWeight: '600' },
  section: { marginTop: 16, fontWeight: '600' },
  colors: { flexDirection: 'row', marginTop: 8, gap: 8 },
  colorDot: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E5E7EB', borderWidth: 2, borderColor: 'transparent' },
  colorSelected: { borderColor: '#FF4D00' },
  buttons: { flexDirection: 'row', marginTop: 24, gap: 12 },
  btnPrimary: { flex: 1, height: 48, backgroundColor: '#FF4D00', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  btnSecondary: { flex: 1, height: 48, backgroundColor: '#FF8C00', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: '600' },
});
