/* Pricing — two tiers (Practice / Group). */

const PriceTier = ({ name, price, period, blurb, features, ctaLabel, featured = false, onCta }) => (
  <div style={{
    background: featured
      ? 'linear-gradient(180deg, var(--ink-800), var(--ink-850))'
      : 'var(--ink-800)',
    border: featured ? '1px solid rgba(31, 92, 66, 0.4)' : '1px solid var(--border)',
    borderRadius: 20,
    padding: 32,
    position: 'relative',
    boxShadow: featured ? 'var(--glow-accent)' : 'none',
    display: 'flex', flexDirection: 'column', gap: 24,
  }}>
    {featured && (
      <div style={{
        position: 'absolute', top: -14, left: 32,
        background: 'var(--accent)', color: 'var(--accent-fg)',
        padding: '5px 10px', borderRadius: 999,
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
      }}>MOST POPULAR</div>
    )}
    <div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: featured ? 'var(--accent)' : 'var(--fg-muted)',
        marginBottom: 14,
      }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 56, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--fg)',
        }}>{price}</span>
        <span style={{ color: 'var(--fg-muted)', fontSize: 16 }}>{period}</span>
      </div>
      <p style={{ color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.5, marginTop: 14 }}>{blurb}</p>
    </div>
    <div style={{ height: 1, background: 'var(--ink-700)' }} />
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--fg-2)' }}>
          <span style={{
            width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
            background: 'var(--sky-glow)', color: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
          }}>
            <Icon name="check" size={11} color="var(--accent)" strokeWidth={2.5} />
          </span>
          <span style={{ lineHeight: 1.45 }}>{f}</span>
        </li>
      ))}
    </ul>
    <div style={{ flex: 1 }} />
    <Button variant={featured ? 'primary' : 'secondary'} size="lg" arrow onClick={onCta}>{ctaLabel}</Button>
  </div>
);

const Pricing = ({ onBookDemo }) => (
  <section className="fc-section" id="pricing">
    <div className="fc-container">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
        <Eyebrow style={{ justifyContent: 'center' }}>Pricing</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.05,
          letterSpacing: '-0.035em', marginTop: 20, marginBottom: 16,
        }}>
          One flat fee.<br/>No per-message charges.
        </h2>
        <p style={{ color: 'var(--fg-3)', fontSize: 16, lineHeight: 1.5 }}>
          Includes setup, ongoing tuning, and unlimited patient messages. Cancel any time.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 900, margin: '0 auto' }}>
        <PriceTier
          name="Practice"
          price="$890"
          period="/ month"
          blurb="For single-location private practices. Up to 3 operatories."
          features={[
            'All three automations: no-shows, dormant, reviews',
            'Connects to your existing PMS (read-only)',
            'White-glove setup in 4 business days',
            'Weekly results recap by email',
            'HIPAA-compliant infrastructure',
            'No-contract — cancel anytime',
          ]}
          ctaLabel="Book a demo"
          featured
          onCta={onBookDemo}
        />
        <PriceTier
          name="Group"
          price="$2,400"
          period="/ month"
          blurb="For multi-location DSOs and groups. Up to 6 locations."
          features={[
            'Everything in Practice',
            'Per-location reporting + roll-ups',
            'Dedicated success manager',
            'Patient flow A/B testing',
            'Custom integrations (BetweenAppts, RevenueWell, etc.)',
            'Volume pricing beyond 6 locations',
          ]}
          ctaLabel="Talk to sales"
          onCta={onBookDemo}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: 32, color: 'var(--fg-muted)', fontSize: 13 }}>
        All plans include a 60-day money-back guarantee if you don't see a positive ROI.
      </div>
    </div>
  </section>
);

window.Pricing = Pricing;
