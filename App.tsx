import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';
import { CartScreen } from './src/screens/CartScreen';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { WalletScreen } from './src/screens/WalletScreen';
import { CheckoutScreen } from './src/screens/CheckoutScreen';
import { OrderConfirmationScreen } from './src/screens/OrderConfirmationScreen';
import { StatusBar } from 'expo-status-bar';
import { CartProvider, useCart } from './src/context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product' }} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartMain" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Wallet" component={WalletScreen} options={{ title: 'My Wallet' }} />
    </Stack.Navigator>
  );
}

function CartBadge() {
  const { count } = useCart();
  return count > 0 ? count : undefined;
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF4D00',
        tabBarInactiveTintColor: '#6B7280',
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Cart" component={CartStack} options={{ tabBarBadge: <CartBadge /> }} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainTabs />
      </NavigationContainer>
    </CartProvider>
  );
}
