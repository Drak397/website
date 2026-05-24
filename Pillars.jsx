/* Pillars — the three core modules.
   Copy is the customer's bridge statement, verbatim. */

const PillarCard = ({ accentTone, num, title, body, footnote, featured = false }) => (
  <div className={`fc-card fc-card--hover`} style={{
    display: 'flex', flexDirection: 'column', gap: 18, height: '100%',
    background: featured ? 'linear-gradient(180deg, var(--bg-raised) 0%, var(--moss-50) 100%)' : 'var(--bg-raised)',
    borderColor: featured ? 'var(--moss-300)' : 'var(--border)',
    boxShadow: featured ? 'var(--glow-accent)' : 'var(--shadow-1)',
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
        letterSpacing: '0.14em', color: accentTone,
      }}>{num}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-muted)',
      }}>Module</span>
    </div>
    <h3 style={{
      fontFamily: 'var(--font-display)', fontWeight: 900,
      fontSize: 30, lineHeight: 1.0, letterSpacing: '-0.04em',
      color: 'var(--fg)',
    }}>{title}</h3>
    <p style={{ fontSize: 16, color: 'var(--fg-3)', lineHeight: 1.55 }}>{body}</p>
    <div style={{
      marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)',
      fontSize: 13, color: accentTone, fontFamily: 'var(--font-mono)',
      letterSpacing: '-0.005em', fontWeight: 600,
    }}>{footnote}</div>
  </div>
);

const Pillars = () => (
  <section className="fc-section" id="features">
    <div className="fc-container">
      <div style={{ maxWidth: 760, marginBottom: 64 }}>
        <Eyebrow>Three modules, on autopilot</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.0,
          letterSpacing: '-0.055em', marginTop: 20,
        }}>
          The three places<br/>private practices leak revenue.
        </h2>
        <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.55, color: 'var(--fg-3)', maxWidth: 640 }}>
          We close all three. Nobody on your team learns a new tool. The front desk keeps working the way they already do.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <PillarCard
          num="01"
          accentTone="var(--accent)"
          title="No-show elimination"
          body="Every patient gets an automatic SMS + WhatsApp reminder 24 hours and 2 hours before their appointment. One tap to confirm. If they cancel, they get an automatic prompt to reschedule. The front desk stops making manual reminder calls."
          footnote="↗ typical: 60–80% of no-shows recovered"
        />
        <PillarCard
          num="02"
          accentTone="var(--accent)"
          title="Dormant patient reactivation"
          body="Patients who haven't been in for 6+ months are automatically identified and sent a short personalised sequence over 2 weeks. The message references their last treatment. No one on the team does anything. Dormant patients start booking again."
          footnote="↗ typical: 4–7% of dormant base / cycle"
        />
        <PillarCard
          num="03"
          accentTone="var(--accent)"
          title="Silent review collector"
          featured
          body="Two hours after every appointment, the patient gets an automatic review request. Happy patients go straight to Google. Unhappy patients get routed to a private form first. Reviews compound every month without anyone thinking about it."
          footnote="↗ typical: +20–50 new 5-star reviews / quarter"
        />
      </div>
    </div>
  </section>
);

window.Pillars = Pillars;
