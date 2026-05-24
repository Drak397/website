/* Metrics — three big claim numbers + a testimonial card slotted into the grid. */

const MetricBlock = ({ value, suffix, label, sub, accent }) => (
  <div>
    <div style={{
      fontFamily: 'var(--font-display)', fontWeight: 900,
      fontSize: 'clamp(60px, 8vw, 104px)', lineHeight: 0.9,
      letterSpacing: '-0.045em',
      color: accent ? 'var(--accent)' : 'var(--fg)',
      display: 'flex', alignItems: 'baseline', gap: 4,
    }}>
      {value}<span style={{ fontSize: '0.55em', color: 'var(--fg-muted)' }}>{suffix}</span>
    </div>
    <div style={{
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 16,
      color: 'var(--fg)', marginTop: 12, letterSpacing: '-0.005em',
    }}>{label}</div>
    <div style={{ color: 'var(--fg-muted)', fontSize: 13, marginTop: 6, lineHeight: 1.5, maxWidth: 280 }}>{sub}</div>
  </div>
);

const Metrics = () => (
  <section className="fc-section">
    <div className="fc-container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 56, alignItems: 'end' }}>
        <div>
          <Eyebrow>By the numbers</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
            letterSpacing: '-0.035em', marginTop: 20,
          }}>
            What our<br/>practices typically see.
          </h2>
        </div>
        <p style={{ color: 'var(--fg-3)', fontSize: 16, lineHeight: 1.55, maxWidth: 460 }}>
          Median results across active FillChair practices, measured over the first 90 days. Your numbers will vary — we send a personalized projection during your demo.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, paddingTop: 40, borderTop: '1px solid var(--ink-700)' }}>
        <MetricBlock value="71" suffix="%" label="of no-shows rebooked"
          sub="3-touch recovery flow runs within 24 hours of the missed appointment." accent />
        <MetricBlock value="$38k" label="median quarterly recovery"
          sub="From dormant reactivation alone. Net of FillChair cost." />
        <MetricBlock value="+42" label="new 5-star reviews / quarter"
          sub="Posted to Google. Only sent to patients who had a smooth visit." />
      </div>
    </div>
  </section>
);

window.Metrics = Metrics;
