/* CtaBand + Footer — slimmer, no link columns. */

const CtaBand = ({ onBookDemo }) => (
  <section className="fc-section">
    <div className="fc-container">
      <div style={{
        position: 'relative',
        background: 'var(--moss-900)',
        borderRadius: 32,
        padding: '88px 64px',
        overflow: 'hidden',
        color: 'var(--paper)',
      }}>
        <div style={{
          position: 'absolute', top: -200, right: -120, width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(172,207,188,0.18) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.96,
              letterSpacing: '-0.055em', textWrap: 'balance', color: 'var(--paper)',
            }}>
              Stop losing patients<br/>to silence.
            </h2>
            <p style={{ marginTop: 24, color: 'rgba(250,250,247,0.7)', fontSize: 17, lineHeight: 1.55, maxWidth: 520 }}>
              20-minute call. We'll project your specific recovery numbers based on your PMS data. Zero commitment.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <button onClick={onBookDemo} style={{
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
              padding: '16px 28px', borderRadius: 999, border: 'none',
              background: 'var(--paper)', color: 'var(--moss-900)',
              display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
              transition: 'all 200ms cubic-bezier(0.2,0.7,0.2,1)',
            }}
              onMouseOver={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.transform = 'none'; }}
            >
              Book your demo
              <span>→</span>
            </button>
            <div style={{ color: 'rgba(250,250,247,0.55)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="shield" size={13} color="rgba(250,250,247,0.5)" />
              No contract · Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0 40px' }}>
    <div className="fc-container" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 24, flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Logo size={28} wordmarkSize={20} />
        <div style={{
          paddingLeft: 16, borderLeft: '1px solid var(--border)', marginLeft: 4,
          color: 'var(--fg-muted)', fontSize: 13,
        }}>
          The practice runs itself. You see your patients.
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 20,
        color: 'var(--fg-muted)', fontSize: 12,
      }}>
        <span>© 2026 FillChair, Inc.</span>
        <a href="#" style={{ color: 'var(--fg-muted)', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ color: 'var(--fg-muted)', textDecoration: 'none' }}>Terms</a>
      </div>
    </div>
  </footer>
);

window.CtaBand = CtaBand;
window.Footer  = Footer;
