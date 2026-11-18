import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

export function CartScreen() {
  const { items, updateQty, removeItem, total } = useCart();
  const navigation = useNavigation<any>();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.empty}>Your cart is empty.</Text>
        <Text style={styles.hint}>Add items from the home screen to get started.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {items.map((item) => (
        <View key={item.productId + (item.color || '')} style={styles.item}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {item.color && <Text style={styles.muted}>Color: {item.color}</Text>}
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => updateQty(item.productId, item.quantity - 1)}>
                <Text style={styles.qtyBtn}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qty}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQty(item.productId, item.quantity + 1)}>
                <Text style={styles.qtyBtn}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeItem(item.productId)} style={{ marginLeft: 16 }}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#FFFFFF' },
  title: { fontSize: 24, fontWeight: '700', padding: 16 },
  empty: { fontSize: 18, color: '#1F2937', marginBottom: 8 },
  hint: { color: '#6B7280', textAlign: 'center' },
  item: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  image: { width: 80, height: 80, borderRadius: 8 },
  itemTitle: { fontWeight: '600', color: '#1F2937' },
  muted: { color: '#6B7280', fontSize: 12 },
  price: { color: '#0F766E', fontWeight: '700', marginTop: 4 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyBtn: { fontSize: 20, paddingHorizontal: 8, color: '#1F2937' },
  qty: { marginHorizontal: 8, fontWeight: '600' },
  remove: { color: '#EF4444', fontSize: 12 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  totalLabel: { fontSize: 18, fontWeight: '600' },
  totalValue: { fontSize: 18, fontWeight: '700', color: '#0F766E' },
  checkoutBtn: { margin: 16, height: 48, backgroundColor: '#0F766E', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  checkoutText: { color: '#FFFFFF', fontWeight: '600' },
});
