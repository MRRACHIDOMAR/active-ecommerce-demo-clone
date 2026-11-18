import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function OrderConfirmationScreen({ route }: any) {
  const { orderId, total } = route.params || { orderId: 'ORD-DEMO', total: 0 };
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✓</Text>
      <Text style={styles.title}>Order Confirmed</Text>
      <Text style={styles.orderId}>Order #{orderId}</Text>
      <Text style={styles.total}>Total paid (demo): ${total.toFixed(2)}</Text>
      <Text style={styles.message}>Thank you for your demo order. This is not a real transaction.</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 24 },
  icon: { fontSize: 64, color: '#10B981', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  orderId: { fontSize: 16, color: '#6B7280', marginBottom: 8 },
  total: { fontSize: 20, fontWeight: '700', color: '#FF4D00', marginBottom: 16 },
  message: { textAlign: 'center', color: '#1F2937', marginBottom: 32 },
  btn: { height: 48, backgroundColor: '#FF4D00', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 },
  btnText: { color: '#FFFFFF', fontWeight: '600' },
});
