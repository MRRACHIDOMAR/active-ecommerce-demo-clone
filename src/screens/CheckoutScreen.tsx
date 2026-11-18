import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

export function CheckoutScreen() {
  const { total, items } = useCart();
  const navigation = useNavigation<any>();
  const [name, setName] = useState('Demo User');
  const [address, setAddress] = useState('123 Main Street, Djibouti');
  const [phone, setPhone] = useState('+253 77 00 00 00');
  const [loading, setLoading] = useState(false);

  const placeOrder = () => {
    if (!name || !address) {
      Alert.alert('Missing information', 'Please fill in your name and address.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OrderConfirmation', { orderId: 'ORD-' + Date.now().toString().slice(-6), total });
    }, 1200);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.section}>Delivery Information</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full name" />
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone" keyboardType="phone-pad" />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="Delivery address" multiline />

      <Text style={styles.section}>Order Summary</Text>
      <Text style={styles.summary}>{items.length} item(s)</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>

      <TouchableOpacity style={styles.btn} onPress={placeOrder} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'Placing order…' : 'Place Demo Order'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
  section: { fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 12, marginBottom: 12, backgroundColor: '#F8F9FA' },
  summary: { color: '#6B7280' },
  total: { fontSize: 18, fontWeight: '700', color: '#FF4D00', marginVertical: 8 },
  btn: { marginTop: 24, height: 48, backgroundColor: '#FF4D00', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: '600' },
});
