export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#134E4A', margin: 0 }}>
      <section style={{ padding: '64px 24px', textAlign: 'center', background: '#F0FDFA' }}>
        <h1 style={{ fontSize: '40px', margin: '0 0 16px' }}>Shop locally.<br />Delivered fast.</h1>
        <p style={{ fontSize: '18px', color: '#0F766E', maxWidth: '560px', margin: '0 auto 32px' }}>
          A modern marketplace built for Djibouti and the Horn of Africa. Discover products, support local sellers, and manage your orders in one place.
        </p>
        <a href="#app" style={{ display: 'inline-block', background: '#0F766E', color: '#fff', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600 }}>
          Get the app
        </a>
      </section>
      <section style={{ padding: '48px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <h2>Featured categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          <div style={{ border: '1px solid #CCFBF1', borderRadius: '12px', padding: '16px' }}><strong>Women Clothing</strong><p>Fashion for every day</p></div>
          <div style={{ border: '1px solid #CCFBF1', borderRadius: '12px', padding: '16px' }}><strong>Men Clothing</strong><p>Essential styles</p></div>
          <div style={{ border: '1px solid #CCFBF1', borderRadius: '12px', padding: '16px' }}><strong>Electronics</strong><p>Computers & accessories</p></div>
          <div style={{ border: '1px solid #CCFBF1', borderRadius: '12px', padding: '16px' }}><strong>Auto</strong><p>Parts & accessories</p></div>
        </div>
      </section>
      <section id="app" style={{ padding: '48px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <h2>How it works</h2>
        <ol>
          <li>Browse products and categories</li>
          <li>Add to cart and choose delivery</li>
          <li>Place a demo order and track it</li>
        </ol>
        <p style={{ marginTop: '32px' }}>
          <a href="/privacy" style={{ color: '#0F766E', marginRight: '16px' }}>Privacy</a>
          <a href="/terms" style={{ color: '#0F766E' }}>Terms</a>
        </p>
      </section>
    </main>
  );
}
