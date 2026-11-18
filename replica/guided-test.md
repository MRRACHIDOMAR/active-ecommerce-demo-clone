# Guided Test Execution – SoukNova Clone

## Prerequisites
- Supabase project with schema.sql + seed-uuid.sql applied
- Anonymous auth enabled
- App running (`npx expo start`)

## F01 Core shopping loop
1. Open app → Home loads (products or fallback message)
2. Tap a product → Detail screen shows title, price, colors
3. Select color → Tap “Add to Cart” → Alert “Added”
4. Go to Cart tab → Item appears with quantity controls
5. Tap “Proceed to Checkout” → Fill form → Place Demo Order
6. Confirmation screen shows order id

**Expected**: full loop without crash.  
**Pass / Fail**: _______

## F02 Categories
1. Tap Categories tab
2. Grid loads (from Supabase or fallback)
3. Tap a category (no crash)

**Pass / Fail**: _______

## F03 Profile / Wallet
1. Tap Profile → see header and menu
2. Tap My Wallet → balance card and history list

**Pass / Fail**: _______

## Notes
Record any console errors or visual mismatches. Screenshots can be added later for replica-diff.
