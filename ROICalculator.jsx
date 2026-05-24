/* ROI Calculator — replaces Pricing.
   Layout mirrors the reference: dark moss-900 band, big heading on left,
   sliders below, result card on the right. No illustrations. */

const fmtEUR = (n) => '€' + Math.round(n).toLocaleString('en-US');

const Slider = ({ label, value, setValue, min, max, step = 1, prefix = '', suffix = '', help }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 17,
          color: 'rgba(250,250,247,0.62)',
        }}>{label}</span>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 20, letterSpacing: '-0.04em',
          color: 'var(--moss-300)',
          borderBottom: '2px solid var(--moss-300)',
          paddingBottom: 1,
        }}>{prefix}{value.toLocaleString('en-US')}{suffix}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          width: '100%',
          appearance: 'none',
          WebkitAppearance: 'none',
          background: `linear-gradient(to right, var(--moss-300) 0%, var(--moss-300) ${pct}%, rgba(250,250,247,0.12) ${pct}%, rgba(250,250,247,0.12) 100%)`,
          height: 4, borderRadius: 999, outline: 'none', cursor: 'pointer',
        }}
        className="fc-roi-slider"
      />
      {help && (
        <div style={{ marginTop: 10, fontSize: 12, color: 'rgba(250,250,247,0.40)' }}>{help}</div>
      )}
    </div>
  );
};

const ROICalculator = ({ onBookDemo }) => {
  const [appts, setAppts] = React.useState(80);     // weekly
  const [rate,  setRate]  = React.useState(15);     // %
  const [value, setValue] = React.useState(180);    // €

  // Monthly lost = weekly × 4.33 weeks × rate% × avg value
  const monthlyLost = appts * 4.33 * (rate / 100) * value;
  // Recovered = 71% of lost (typical FillChair rebook rate)
  const recovered   = monthlyLost * 0.71;
  // Cost placeholder
  const cost        = 490;
  const net         = recovered - cost;

  return (
    <section className="fc-section" id="roi">
      <div className="fc-container">
        <div style={{
          position: 'relative',
          background: 'var(--moss-900)',
          borderRadius: 32,
          padding: '88px 64px',
          overflow: 'hidden',
          color: 'var(--paper)',
        }}>
          {/* soft moss highlight glow */}
          <div style={{
            position: 'absolute', top: -260, right: -160, width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(172,207,188,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* subtle dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 64, alignItems: 'start',
          }}>
            {/* LEFT — heading + sliders */}
            <div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--moss-300)',
                marginBottom: 18,
                display: 'inline-flex', alignItems: 'center', gap: 10,
                whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--moss-300)', flexShrink: 0 }} />
                ROI calculator
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(36px, 4.4vw, 64px)', lineHeight: 0.98,
                letterSpacing: '-0.055em', color: 'var(--paper)',
                textWrap: 'balance',
                marginBottom: 22,
              }}>
                How much money are you losing to <span style={{ color: 'var(--moss-300)' }}>no-shows</span> every month?
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(250,250,247,0.65)', maxWidth: 480, marginBottom: 44 }}>
                Drag the sliders to match your practice. We'll show you what FillChair typically recovers.
              </p>

              <Slider
                label="Appointments per week"
                value={appts} setValue={setAppts}
                min={20} max={300} step={5}
                help="Across all chairs / providers in your practice."
              />
              <Slider
                label="No-show rate"
                value={rate} setValue={setRate}
                min={5} max={40} step={1} suffix="%"
                help="Industry average for private practices is 12–20%."
              />
              <Slider
                label="Average appointment value"
                value={value} setValue={setValue}
                min={50} max={500} step={10} prefix="€"
                help="What a single chair-hour is worth, on average."
              />
            </div>

            {/* RIGHT — result card */}
            <div style={{
              border: '1.5px solid rgba(250,250,247,0.22)',
              borderRadius: 24,
              padding: 36,
              background: 'rgba(250,250,247,0.03)',
              position: 'sticky', top: 24,
            }}>
              <div style={{
                fontSize: 15, color: 'rgba(250,250,247,0.7)',
                marginBottom: 14, textAlign: 'center',
              }}>
                Monthly, FillChair recovers
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(48px, 5.5vw, 80px)', lineHeight: 1,
                letterSpacing: '-0.06em', color: 'var(--moss-300)',
                textAlign: 'center', marginBottom: 8,
              }}>
                {fmtEUR(recovered)}<span style={{ fontSize: '0.45em', color: 'rgba(172,207,188,0.6)' }}>/mo</span>
              </div>
              <div style={{
                textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'rgba(250,250,247,0.42)', letterSpacing: '0.06em',
                marginBottom: 30,
              }}>
                {fmtEUR(recovered * 12)} / YEAR · BREAK-EVEN IN WEEK 1
              </div>

              <div style={{ height: 1, background: 'rgba(250,250,247,0.12)', marginBottom: 22 }} />

              <ResultRow label="Monthly loss"          value={fmtEUR(monthlyLost)} />
              <ResultRow label="Rebook rate"           value="71%" />
              <ResultRow label="FillChair fee"         value={fmtEUR(cost)} />
              <ResultRow label="Net monthly gain"      value={fmtEUR(net)} highlight />

              <button
                onClick={onBookDemo}
                style={{
                  marginTop: 30,
                  width: '100%',
                  fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15,
                  padding: '14px 22px', borderRadius: 999, border: 'none',
                  background: 'var(--paper)', color: 'var(--moss-900)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  cursor: 'pointer',
                  transition: 'all 200ms cubic-bezier(0.2,0.7,0.2,1)',
                }}
                onMouseOver={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.transform = 'none'; }}
              >
                Get my recovery plan
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fc-roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #FAFAF7;
          border: 3px solid var(--moss-300);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(10, 37, 32, 0.35);
          transition: transform 120ms;
        }
        .fc-roi-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .fc-roi-slider::-moz-range-thumb {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #FAFAF7;
          border: 3px solid var(--moss-300);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

const ResultRow = ({ label, value, highlight = false }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12,
    padding: '8px 0',
    fontSize: highlight ? 16 : 14,
    color: highlight ? 'var(--paper)' : 'rgba(250,250,247,0.65)',
    fontWeight: highlight ? 600 : 400,
    borderTop: highlight ? '1px solid rgba(250,250,247,0.18)' : 'none',
    marginTop: highlight ? 8 : 0,
    paddingTop: highlight ? 14 : 8,
  }}>
    <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
    <span style={{
      fontFamily: highlight ? 'var(--font-display)' : 'var(--font-mono)',
      fontWeight: highlight ? 900 : 600,
      fontSize: highlight ? 22 : 14,
      letterSpacing: highlight ? '-0.04em' : 0,
      color: highlight ? 'var(--moss-300)' : 'var(--paper)',
      whiteSpace: 'nowrap',
    }}>{value}</span>
  </div>
);

window.ROICalculator = ROICalculator;
