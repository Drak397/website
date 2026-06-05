const LogoStrip = () => (
  <section className="fc-section fc-section--tight" style={{ paddingTop: 24, paddingBottom: 48 }}>
    <div className="fc-container">
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--fg-muted)',
        textAlign: 'center', marginBottom: 22,
      }}>
        Built for private dental practices across the United States
      </div>
      <div style={{
        textAlign: 'center',
        fontFamily: 'var(--font-sans)', fontWeight: 400,
        fontSize: 15, color: 'var(--fg-muted)',
        opacity: 0.7,
      }}>
        Used by private practices across the US
      </div>
    </div>
  </section>
);

window.LogoStrip = LogoStrip;
