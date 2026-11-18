export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#134E4A', margin: 0, background: '#fff' }}>
      <section style={{ padding: '72px 24px 56px', textAlign: 'center', background: 'linear-gradient(180deg, #F0FDFA 0%, #fff 100%)' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', margin: '0 0 16px', lineHeight: 1.2, fontWeight: 700 }}>
          Shop locally.<br />Delivered fast.
        </h1>
        <p style={{ fontSize: '18px', color: '#0F766E', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.5 }}>
          A modern marketplace built for Djibouti and the Horn of Africa. Discover products, support local sellers, and manage your orders in one place.
        </p>
        <a
          href="#app"
          style={{
            display: 'inline-block',
            background: '#0F766E',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Get the app
        </a>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Featured categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Women Clothing', desc: 'Fashion for every day' },
            { title: 'Men Clothing', desc: 'Essential styles' },
            { title: 'Electronics', desc: 'Computers & accessories' },
            { title: 'Auto', desc: 'Parts & accessories' },
          ].map((cat) => (
            <div key={cat.title} style={{ border: '1px solid #CCFBF1', borderRadius: '12px', padding: '20px', background: '#fff' }}>
              <strong style={{ display: 'block', marginBottom: '8px' }}>{cat.title}</strong>
              <p style={{ margin: 0, color: '#0F766E', fontSize: '14px' }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="app" style={{ padding: '48px 24px 72px', maxWidth: '720px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>How it works</h2>
        <ol style={{ paddingLeft: '20px', lineHeight: 1.7 }}>
          <li>Browse products and categories</li>
          <li>Add to cart and choose delivery</li>
          <li>Place a demo order and track it</li>
        </ol>
        <p style={{ marginTop: '40px', fontSize: '14px' }}>
          <a href="/privacy" style={{ color: '#0F766E', marginRight: '20px' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#0F766E' }}>Terms of Use</a>
        </p>
      </section>
    </main>
  );
}
