import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type ProductCardProps = {
  item: any;
  onPress: (product: any) => void;
};

export const ProductCard = React.memo(function ProductCard({ item, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.productCard} onPress={() => onPress(item)}>
      <Image
        source={{ uri: item.images?.[0] }}
        style={styles.productImage}
        contentFit="cover"
        cachePolicy="memory-disk"
      />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.price}>${item.price?.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  productCard: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 12, backgroundColor: '#FFFFFF', borderRadius: 12, padding: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  productImage: { width: 80, height: 80, borderRadius: 8 },
  productTitle: { fontWeight: '600', color: '#1F2937' },
  price: { color: '#0F766E', fontWeight: '700', marginTop: 4 },
});
