/* ROI Calculator — simplified single-slider version.
   One question: how many no-shows per week?
   One editable value: average patient value.
   Result: monthly revenue lost. */

const ROICalculator = ({ onBookDemo }) => {
  const [noShows, setNoShows] = React.useState(5);
  const [avgValue, setAvgValue] = React.useState(250);
  const [editing, setEditing] = React.useState(false);
  const [inputVal, setInputVal] = React.useState('250');

  const pct = ((noShows - 1) / (30 - 1)) * 100;

  // Monthly loss = no-shows/week × 4.33 weeks × avg value
  const monthlyLost = Math.round(noShows * 4.33 * avgValue);
  const yearlyLost  = monthlyLost * 12;

  const handleValueCommit = () => {
    const n = parseInt(inputVal.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(n) && n > 0) setAvgValue(n);
    else setInputVal(String(avgValue));
    setEditing(false);
  };

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
          {/* moss glow */}
          <div style={{
            position: 'absolute', top: -260, right: -160, width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(172,207,188,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* dot grid */}
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
            gap: 64,
            alignItems: 'center',
          }}>

            {/* LEFT — heading + slider + editable value */}
            <div>
              <div style={{
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--moss-300)',
                marginBottom: 18,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--moss-300)', flexShrink: 0 }} />
                ROI calculator
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 58px)', lineHeight: 1.0,
                letterSpacing: '-0.05em', color: 'var(--paper)',
                textWrap: 'balance',
                marginBottom: 48,
              }}>
                How much are<br/>empty chairs<br/>costing you?
              </h2>

              {/* Slider block */}
              <div style={{ marginBottom: 36 }}>
                <div style={{
                  fontSize: 18, color: 'rgba(250,250,247,0.75)',
                  fontFamily: 'var(--font-sans)', fontWeight: 400,
                  marginBottom: 20, lineHeight: 1.4,
                }}>
                  I had{' '}
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 22, color: 'var(--moss-300)',
                    borderBottom: '2px solid var(--moss-300)',
                    paddingBottom: 1,
                  }}>{noShows}</span>
                  {' '}no-show{noShows !== 1 ? 's' : ''} this week
                </div>

                <input
                  type="range"
                  min={1} max={30} step={1}
                  value={noShows}
                  onChange={e => setNoShows(Number(e.target.value))}
                  style={{
                    width: '100%',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    background: `linear-gradient(to right, var(--moss-300) 0%, var(--moss-300) ${pct}%, rgba(250,250,247,0.12) ${pct}%, rgba(250,250,247,0.12) 100%)`,
                    height: 4, borderRadius: 999, outline: 'none', cursor: 'pointer',
                  }}
                  className="fc-roi-slider"
                />
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginTop: 10, fontSize: 12,
                  color: 'rgba(250,250,247,0.35)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  <span>1</span><span>30</span>
                </div>
              </div>

              {/* Editable avg value */}
              <div style={{
                fontSize: 18, color: 'rgba(250,250,247,0.75)',
                fontFamily: 'var(--font-sans)', fontWeight: 400,
                lineHeight: 1.5,
              }}>
                and every patient is worth{' '}
                {editing ? (
                  <input
                    autoFocus
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onBlur={handleValueCommit}
                    onKeyDown={e => { if (e.key === 'Enter') handleValueCommit(); }}
                    style={{
                      display: 'inline-block',
                      width: 90,
                      fontFamily: 'var(--font-display)', fontWeight: 900,
                      fontSize: 22, color: 'var(--moss-900)',
                      background: 'var(--moss-300)',
                      border: 'none', borderRadius: 6,
                      padding: '2px 8px',
                      outline: 'none',
                      textAlign: 'center',
                    }}
                  />
                ) : (
                  <span
                    onClick={() => { setEditing(true); setInputVal(String(avgValue)); }}
                    title="Click to edit"
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 900,
                      fontSize: 22, color: 'var(--moss-300)',
                      borderBottom: '2px solid var(--moss-300)',
                      paddingBottom: 1, cursor: 'text',
                    }}
                  >${avgValue}</span>
                )}{' '}
                to me on average
              </div>
            </div>

            {/* RIGHT — result card */}
            <div style={{
              border: '1.5px solid rgba(250,250,247,0.22)',
              borderRadius: 24,
              padding: 40,
              background: 'rgba(250,250,247,0.03)',
            }}>
              <div style={{
                fontSize: 14, color: 'rgba(250,250,247,0.6)',
                marginBottom: 10, textAlign: 'center',
                fontFamily: 'var(--font-sans)', letterSpacing: '0.02em',
              }}>
                You're losing every month
              </div>

              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(52px, 6vw, 84px)', lineHeight: 1,
                letterSpacing: '-0.06em', color: 'var(--moss-300)',
                textAlign: 'center', marginBottom: 6,
              }}>
                ${monthlyLost.toLocaleString('en-US')}
              </div>

              <div style={{
                textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'rgba(250,250,247,0.38)', letterSpacing: '0.06em',
                marginBottom: 32,
              }}>
                ${yearlyLost.toLocaleString('en-US')} / YEAR
              </div>

              <div style={{ height: 1, background: 'rgba(250,250,247,0.12)', marginBottom: 24 }} />

              <ResultRow label="No-shows / week"   value={noShows} />
              <ResultRow label="No-shows / month"  value={Math.round(noShows * 4.33)} />
              <ResultRow label="Value per patient" value={`$${avgValue}`} />
              <ResultRow label="Monthly loss"      value={`$${monthlyLost.toLocaleString('en-US')}`} highlight />

              <button
                onClick={onBookDemo}
                style={{
                  marginTop: 30, width: '100%',
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
                See how much we can recover
                <span>→</span>
              </button>

              <div style={{
                marginTop: 14, textAlign: 'center',
                fontSize: 12, color: 'rgba(250,250,247,0.35)',
              }}>
                No contract · 60-day money-back guarantee
              </div>
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
          box-shadow: 0 4px 12px rgba(10,37,32,0.35);
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
