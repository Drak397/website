/* App.jsx — composes the marketing site. */

const DemoModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(10, 37, 32, 0.32)', backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
      animation: 'fcFadeIn 200ms ease-out',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-raised)', border: '1px solid var(--border)',
        borderRadius: 24, padding: 40, maxWidth: 460, width: '100%',
        boxShadow: 'var(--shadow-3)',
        position: 'relative',
        animation: 'fcRiseIn 280ms cubic-bezier(0.2,0.7,0.2,1)',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          width: 32, height: 32, borderRadius: '50%',
          background: 'var(--mist)', border: '1px solid var(--border)',
          color: 'var(--fg-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}><Icon name="x" size={14} /></button>
        <LogoMark size={48} glow />
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 28, letterSpacing: '-0.03em', lineHeight: 1.1,
          marginTop: 18, marginBottom: 10,
        }}>Book your 20-minute demo.</h3>
        <p style={{ color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.55, marginBottom: 22 }}>
          We'll project your specific recovery numbers from your PMS. No prep needed.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input placeholder="Practice email"
            style={{
              background: 'var(--paper-2)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '12px 14px', color: 'var(--fg)',
              fontFamily: 'var(--font-sans)', fontSize: 14, outline: 'none',
            }} />
          <input placeholder="Practice name"
            style={{
              background: 'var(--paper-2)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '12px 14px', color: 'var(--fg)',
              fontFamily: 'var(--font-sans)', fontSize: 14, outline: 'none',
            }} />
          <Button variant="primary" arrow style={{ width: '100%', justifyContent: 'center' }}>Continue to calendar</Button>
        </div>
        <div style={{ marginTop: 18, color: 'var(--fg-muted)', fontSize: 12, textAlign: 'center' }}>
          We'll never spam. One follow-up, then silence.
        </div>
      </div>
      <style>{`
        @keyframes fcFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fcRiseIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

const App = () => {
  const [demoOpen, setDemoOpen] = React.useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <div>
      <SiteHeader onBookDemo={openDemo} />
      <Hero onBookDemo={openDemo} />
      <LogoStrip />
      <Pillars />
      <HowItWorks />
      <Metrics />
      <ROICalculator onBookDemo={openDemo} />
      <Testimonial />
      <Faq />
      <CtaBand onBookDemo={openDemo} />
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
