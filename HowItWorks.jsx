/* HowItWorks — three numbered steps. */

const StepCard = ({ n, icon, title, body, isLast }) => (
  <div style={{ display: 'flex', gap: 20, position: 'relative' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: 'var(--ink-800)',
        border: '1px solid var(--ink-600)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <Icon name={icon} size={22} color="var(--accent)" />
        <span style={{
          position: 'absolute', top: -8, right: -8,
          background: 'var(--accent)', color: 'var(--accent-fg)',
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11,
          padding: '2px 7px', borderRadius: 999,
        }}>{n}</span>
      </div>
      {!isLast && (
        <div style={{
          width: 1, flex: 1, minHeight: 28,
          background: 'linear-gradient(180deg, var(--ink-500) 0%, transparent 100%)',
        }} />
      )}
    </div>
    <div style={{ paddingBottom: isLast ? 0 : 32, flex: 1 }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 26, letterSpacing: '-0.025em', lineHeight: 1.1,
        marginBottom: 10,
      }}>{title}</h3>
      <p style={{ fontSize: 16, color: 'var(--fg-3)', lineHeight: 1.5, maxWidth: 580 }}>{body}</p>
    </div>
  </div>
);

const HowItWorks = () => (
  <section className="fc-section" id="how" style={{ background: 'linear-gradient(180deg, transparent, var(--ink-850) 40%, transparent)' }}>
    <div className="fc-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
      <div style={{ position: 'sticky', top: 100 }}>
        <Eyebrow>How it works</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
          letterSpacing: '-0.035em', marginTop: 20, marginBottom: 18,
        }}>
          Onboarded in a week.<br/>Running forever.
        </h2>
        <p style={{ color: 'var(--fg-3)', fontSize: 16, lineHeight: 1.55, marginBottom: 28 }}>
          No new dashboard for your team. No retraining. We plug into the practice management system you already use.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 13 }}>
          <Icon name="phone" size={14} color="var(--accent)" />
          Avg setup time: <strong style={{ color: 'var(--fg-2)' }}>4 business days</strong>
        </div>
      </div>
      <div>
        <StepCard n="1" icon="calendar" title="We connect to your PMS."
          body="Read-only integration with Dentrix, Open Dental, Eaglesoft, and others. Takes 20 minutes. Your front desk does nothing." />
        <StepCard n="2" icon="sparkles" title="We tune the flows to your practice."
          body="Your tone of voice, your reschedule windows, your dormant cutoff, your review platforms. Tuned to your brand in onboarding — never generic." />
        <StepCard n="3" icon="trending" title="The chairs start filling."
          body="You get a weekly recap. Filled chairs, recovered revenue, new reviews posted. Cancel anytime — no contract." isLast />
      </div>
    </div>
  </section>
);

window.HowItWorks = HowItWorks;
