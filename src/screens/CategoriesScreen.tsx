import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchCategories } from '../data/supabaseQueries';
import { demoCategories } from '../data/demoData';

export function CategoriesScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState(demoCategories);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const cats = await fetchCategories();
        if (mounted) {
          if (cats.length) {
            setCategories(cats.map((c: any) => ({
              id: c.id,
              name: c.name,
              image: c.image_url,
            })));
          }
          setLoading(false);
        }
      } catch (e) {
        if (mounted) {
          setError('Could not load live categories. Showing demo content.');
          setLoading(false);
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF4D00" />
        <Text style={styles.muted}>Loading categories…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {error && <Text style={styles.warning}>{error}</Text>}
      <Text style={styles.title}>Categories</Text>
      <View style={styles.grid}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.item}>
            <Image source={{ uri: cat.image }} style={styles.image} />
            <Text style={styles.name}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  muted: { marginTop: 12, color: '#6B7280' },
  warning: { backgroundColor: '#FEF3C7', color: '#92400E', padding: 12, margin: 16, borderRadius: 8, textAlign: 'center' },
  title: { fontSize: 24, fontWeight: '700', padding: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8 },
  item: { width: '33%', alignItems: 'center', marginBottom: 16 },
  image: { width: 90, height: 90, borderRadius: 12 },
  name: { fontSize: 12, textAlign: 'center', marginTop: 6, color: '#1F2937' },
});
