export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '720px', margin: '40px auto', padding: '0 16px', color: '#134E4A', lineHeight: 1.6 }}>
      <h1>Privacy Policy – SoukNova (Demo)</h1>
      <p><strong>Last updated</strong>: 18 November 2026</p>
      <p>SoukNova is a demonstration marketplace application. This policy describes how the demo handles information.</p>
      <h2>Information we process</h2>
      <ul>
        <li>Account data created via Supabase Auth (anonymous session or email if enabled).</li>
        <li>Cart and order data stored in the connected Supabase project.</li>
        <li>Device information necessary for the app to function.</li>
      </ul>
      <h2>How we use it</h2>
      <p>To display products, manage the demo cart, and show order confirmation. No data is sold. No advertising tracking is implemented in this demo.</p>
      <h2>Storage</h2>
      <p>Data is stored in the Supabase project associated with the application.</p>
      <h2>Contact</h2>
      <p><a href="https://github.com/MRRACHIDOMAR/active-ecommerce-demo-clone" style={{ color: '#0F766E' }}>https://github.com/MRRACHIDOMAR/active-ecommerce-demo-clone</a></p>
      <p>This is a minimal policy for a demonstration application. A full policy is required before any public production launch.</p>
    </main>
  );
}
