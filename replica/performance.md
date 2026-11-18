# Performance Notes – SoukNova

## Applied optimisations (2026-11-18)
- FlatList with removeClippedSubviews, maxToRenderPerBatch, windowSize, initialNumToRender
- ProductCard memoized (React.memo)
- expo-image with cachePolicy="memory-disk" on product and category images
- Parallel data fetching (Promise.all)
- Hermes enabled by default in Expo SDK 51
- useCallback for renderItem to stabilise list rendering

## Further recommendations
- Add @tanstack/react-query for request caching and background refresh
- Use InteractionManager for non-critical work after navigation
- Profile with Flipper or React Native DevTools before larger changes

## Current state
- Home and Categories load data in parallel with Promise.all.
- Images use expo-image with disk + memory cache.
- Cart is in-memory Context (fast, but lost on restart).
- Product list uses FlatList with virtualisation props.
