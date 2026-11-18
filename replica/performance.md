# Performance Notes – SoukNova

## Current state
- Home and Categories load data in parallel with Promise.all (good).
- Images use remote URLs (picsum); no local caching configured.
- Cart is in-memory Context (fast, but lost on restart).
- No FlatList yet – ScrollView is used for short demo lists.

## Recommended optimisations
1. Replace long product lists with FlatList + getItemLayout for better virtualisation.
2. Add expo-image or React Native’s Image with caching headers.
3. Memoize product cards with React.memo.
4. Consider React Query / TanStack Query for request deduplication and background refresh.
5. Lazy-load Product Detail images.
6. Enable Hermes (default in recent Expo) and measure with Flipper or Expo dev tools.

## Quick wins already present
- Parallel fetching on Home.
- Fallback to demo data so the UI never blocks.
- Lightweight StyleSheet objects.

Apply the above when moving from demo to production traffic.
