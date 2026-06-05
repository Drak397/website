/* Testimonial — single large pull-quote card. */

const Testimonial = () => (
  <section className="fc-section">
    <div className="fc-container">
      <div style={{
        background: 'linear-gradient(160deg, var(--ink-850) 0%, var(--ink-800) 100%)',
        border: '1px solid var(--ink-700)',
        borderRadius: 24,
        padding: '64px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* subtle dot pattern in corner */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 280, height: 280,
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--ink-700) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.5, pointerEvents: 'none',
        }} />
        {/* opening quote */}
        <div style={{
          position: 'absolute', top: 28, left: 36,
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 96, lineHeight: 1, color: 'var(--accent)', opacity: 0.4,
        }}>"</div>

        <div style={{ position: 'relative', maxWidth: 880 }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(24px, 2.8vw, 36px)', lineHeight: 1.25,
            letterSpacing: '-0.025em',
            color: 'var(--fg)',
            textWrap: 'balance',
            marginBottom: 32,
          }}>
            We built FillChair because every practice we talked to had the same problem: patients falling through the cracks silently. No-shows nobody followed up on. Dormant patients nobody reactivated. Reviews nobody requested. We automate all three.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--sky-300), var(--sky-500))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 18,
              color: 'var(--accent-fg)',
            }}>G</div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--fg)' }}>Gianmarco</div>
              <div style={{ color: 'var(--fg-muted)', fontSize: 13 }}>Founder · FillChair.io</div>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: 2 }}>
              {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={16} color="var(--warning)" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Testimonial = Testimonial;
