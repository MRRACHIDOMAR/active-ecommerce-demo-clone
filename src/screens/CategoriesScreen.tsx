import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { demoCategories } from '../data/demoData';

export function CategoriesScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.97) setError('Unable to load categories.');
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF4D00" />
        <Text style={styles.muted}>Loading categories…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retry} onPress={() => { setError(null); setLoading(true); }}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.grid}>
        {demoCategories.map((cat) => (
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
  error: { color: '#EF4444', textAlign: 'center', marginBottom: 16 },
  retry: { backgroundColor: '#FF4D00', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  retryText: { color: '#FFFFFF', fontWeight: '600' },
  title: { fontSize: 24, fontWeight: '700', padding: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8 },
  item: { width: '33%', alignItems: 'center', marginBottom: 16 },
  image: { width: 90, height: 90, borderRadius: 12 },
  name: { fontSize: 12, textAlign: 'center', marginTop: 6, color: '#1F2937' },
});
