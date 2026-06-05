/* Hero — bridge statement + animated "live activity" visual.
   The visual is the FillChair dashboard's activity feed — the practice
   sees rows like this in their weekly recap email. */

const HERO_EVENTS = [
  { kind: 'reminder',     who: 'Sarah K.',  meta: 'WhatsApp · 24h before',              icon: 'message',  tone: 'info',    age: 'just now' },
  { kind: 'confirmed',    who: 'Sarah K.',  meta: 'Tomorrow · 2:30 pm',                 icon: 'check',    tone: 'success', age: '3m' },
  { kind: 'reactivation', who: 'Mark D.',   meta: 'Dormant 7 months · cleaning',        icon: 'inbox',    tone: 'info',    age: '12m' },
  { kind: 'review',       who: 'Elena P.',  meta: '5-star · Google',                    icon: 'star',     tone: 'success', age: '24m' },
  { kind: 'reminder',     who: 'James T.',  meta: 'SMS · 2h before',                    icon: 'message',  tone: 'info',    age: '34m' },
  { kind: 'rebooked',     who: 'Anna R.',   meta: 'No-show recovered · Thu 11:00 am',   icon: 'calendar', tone: 'success', age: '52m' },
  { kind: 'review',       who: 'Daniel V.', meta: '5-star · Google',                    icon: 'star',     tone: 'success', age: '1h' },
  { kind: 'reactivation', who: 'Priya S.',  meta: 'Dormant 9 months · checkup',         icon: 'inbox',    tone: 'info',    age: '1h' },
];

const LABELS = {
  reminder:     'Reminder sent',
  confirmed:    'Appointment confirmed',
  reactivation: 'Reactivation sequence sent',
  review:       'Review posted',
  rebooked:     'No-show rebooked',
};

const TONES = {
  info:    { bg: 'rgba(31,92,66,0.06)',  fg: 'var(--accent)' },
  success: { bg: 'rgba(31,138,91,0.10)', fg: 'var(--success)' },
};

const EventRow = ({ event, isNew }) => {
  const tc = TONES[event.tone];
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px',
        borderRadius: 12,
        background: tc.bg,
        animation: isNew ? 'fcSlideIn 320ms cubic-bezier(0.2, 0.7, 0.2, 1)' : 'none',
      }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 10,
        background: 'var(--bg-raised)',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon name={event.icon} size={15} color={tc.fg} strokeWidth={2} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: 'var(--fg)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {event.who} <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>·</span> <span style={{ color: 'var(--fg-3)', fontWeight: 500 }}>{LABELS[event.kind].toLowerCase()}</span>
        </div>
        <div style={{
          fontSize: 12, color: 'var(--fg-muted)', marginTop: 2,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{event.meta}</div>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)',
        flexShrink: 0,
      }}>{event.age}</div>
    </div>
  );
};

const HeroVisual = () => {
  const [start, setStart] = React.useState(0);
  // Rotate one event every 2.4s.
  React.useEffect(() => {
    const id = setInterval(() => setStart(s => (s + 1) % HERO_EVENTS.length), 2400);
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: 5 }, (_, i) => HERO_EVENTS[(start + i) % HERO_EVENTS.length]);

  return (
    <div style={{
      position: 'relative',
      background: 'var(--bg-raised)',
      border: '1px solid var(--border)',
      borderRadius: 24,
      padding: 24,
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
        paddingBottom: 18, borderBottom: '1px solid var(--border)',
      }}>
        <LogoMark size={26} />
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 16,
          letterSpacing: '-0.04em', color: 'var(--fg)',
        }}>Live activity</div>
        <div style={{ flex: 1 }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '3px 10px', borderRadius: 999,
          background: 'rgba(31,138,91,0.10)', color: 'var(--success)',
          fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 0,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--success)' }} />
          RUNNING
        </div>
      </div>

      {/* Event list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {visible.map((e, i) => (
          <EventRow key={`${start}-${i}`} event={e} isNew={i === 0} />
        ))}
      </div>

      {/* Footer summary */}
      <div style={{
        marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 24,
        fontSize: 12, color: 'var(--fg-muted)',
        whiteSpace: 'nowrap',
      }}>
        <div><strong style={{ color: 'var(--fg-2)', fontWeight: 600 }}>Today:</strong> 47 actions</div>
        <div><strong style={{ color: 'var(--fg-2)', fontWeight: 600 }}>This week:</strong> $4,820 recovered</div>
      </div>

      <style>{`
        @keyframes fcSlideIn {
          from { transform: translateY(-3px); opacity: 0.5; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const Hero = ({ onBookDemo }) => (
  <section className="fc-section" style={{ paddingTop: 60, paddingBottom: 100, position: 'relative', overflow: 'hidden' }} id="top">
    {/* ambient moss glow */}
    <div style={{
      position: 'absolute', top: -200, right: '-10%', width: 700, height: 700,
      background: 'radial-gradient(circle, rgba(31, 92, 66, 0.14) 0%, transparent 60%)',
      pointerEvents: 'none',
    }} />
    <div className="fc-container" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative' }}>
      <div>
        <Eyebrow>Patient automation · done for you</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(48px, 6.4vw, 92px)', lineHeight: 0.94,
          letterSpacing: '-0.055em',
          marginTop: 22, marginBottom: 24,
          textWrap: 'balance',
          color: 'var(--fg)',
        }}>
          You see your patients<br/>
          <span style={{ color: 'var(--accent)' }}>The practice run itself</span>
        </h1>
        <p style={{
          fontSize: 19, lineHeight: 1.55,
          color: 'var(--fg-3)',
          maxWidth: 540,
          marginBottom: 36,
        }}>
          A done-for-you patient automation system for private dental clinics. We eliminate no-shows, reactivate dormant patients, and grow your Google reviews — without extra staff, ad spend, or anyone on your team touching a new tool.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" arrow onClick={onBookDemo}>Book a 20-min demo</Button>
          <Button variant="ghost" size="lg" onClick={() => {
            const el = document.getElementById('roi');
            if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
          }}>
            <Icon name="zap" size={16} color="var(--accent)" />
            Calculate your ROI
          </Button>
        </div>
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, color: 'var(--fg-muted)', fontSize: 13 }}>
          <Icon name="shield" size={14} />
          <span>HIPAA-ready · Works with your existing PMS · SMS + WhatsApp</span>
        </div>
      </div>
      <HeroVisual />
    </div>
  </section>
);

window.Hero = Hero;
