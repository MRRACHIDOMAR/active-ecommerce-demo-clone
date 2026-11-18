import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { fetchProducts, fetchCategories } from '../data/supabaseQueries';
import { demoProducts, demoCategories } from '../data/demoData';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState(demoProducts);
  const [categories, setCategories] = useState(demoCategories);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [prods, cats] = await Promise.all([fetchProducts(), fetchCategories()]);
        if (mounted) {
          if (prods.length) setProducts(prods.map((p: any) => ({
            id: p.id,
            title: p.title,
            price: p.price_cents / 100,
            images: p.product_images?.map((i: any) => i.url) || ['https://picsum.photos/id/1011/400/400'],
            rating: p.rating,
            reviewCount: p.review_count,
            brand: p.brand,
            seller: 'In House',
            colors: p.product_variants?.map((v: any) => v.color) || [],
          })));
          if (cats.length) setCategories(cats.map((c: any) => ({
            id: c.id,
            name: c.name,
            image: c.image_url,
          })));
          setLoading(false);
        }
      } catch (e) {
        if (mounted) {
          setError('Could not load live data. Showing demo content.');
          setLoading(false);
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0F766E" />
        <Text style={styles.muted}>Loading offers…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {error && <Text style={styles.warning}>{error}</Text>}
      <View style={styles.searchBar}>
        <Text style={styles.searchPlaceholder}>Search products...</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>DISCOVER SOUKNOVA</Text>
        <Text style={styles.bannerSub}>Shop local, delivered fast</Text>
      </View>

      <View style={styles.chips}>
        <TouchableOpacity style={[styles.chip, styles.chipPrimary]}>
          <Text style={styles.chipTextPrimary}>Today’s Deal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.chip, styles.chipSecondary]}>
          <Text style={styles.chipTextPrimary}>Flash Deal</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Featured Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontal}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.catCard}>
            <Image
              source={{ uri: cat.image }}
              style={styles.catImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
            <Text style={styles.catName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Flash Sale</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={styles.productImage}
              contentFit="cover"
              cachePolicy="memory-disk"
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  muted: { marginTop: 12, color: '#6B7280' },
  warning: { backgroundColor: '#FEF3C7', color: '#92400E', padding: 12, margin: 16, borderRadius: 8, textAlign: 'center' },
  searchBar: { margin: 16, height: 48, backgroundColor: '#F8F9FA', borderRadius: 24, justifyContent: 'center', paddingHorizontal: 16 },
  searchPlaceholder: { color: '#6B7280' },
  banner: { height: 180, backgroundColor: '#FCE4EC', marginHorizontal: 16, borderRadius: 16, justifyContent: 'center', padding: 20 },
  bannerTitle: { fontSize: 24, fontWeight: '700', color: '#1F2937' },
  bannerSub: { color: '#6B7280', marginTop: 4 },
  chips: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 16, gap: 8 },
  chip: { paddingHorizontal: 16, height: 40, borderRadius: 20, justifyContent: 'center' },
  chipPrimary: { backgroundColor: '#0F766E' },
  chipSecondary: { backgroundColor: '#14B8A6' },
  chipTextPrimary: { color: '#FFFFFF', fontWeight: '600' },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginHorizontal: 16, marginTop: 24, marginBottom: 12 },
  horizontal: { paddingLeft: 16 },
  catCard: { width: 100, marginRight: 12, alignItems: 'center' },
  catImage: { width: 80, height: 80, borderRadius: 12 },
  catName: { fontSize: 12, textAlign: 'center', marginTop: 4, color: '#1F2937' },
  productCard: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 12, backgroundColor: '#FFFFFF', borderRadius: 12, padding: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  productImage: { width: 80, height: 80, borderRadius: 8 },
  productTitle: { fontWeight: '600', color: '#1F2937' },
  price: { color: '#0F766E', fontWeight: '700', marginTop: 4 },
});
