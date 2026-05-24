/* LogoStrip — fake clinic name marks to convey social proof.
   No real logos; use stylized text marks in muted color so they read as a "logos row" without faking real practices. */

const ClinicMarks = [
  { name: 'Belmont Dental',  style: 'serif' },
  { name: 'Northshore DDS',  style: 'sans-bold' },
  { name: 'Pearl & Co.',     style: 'serif-italic' },
  { name: 'Riverview Smile', style: 'mono' },
  { name: 'Ashbury Oral',    style: 'sans-thin' },
  { name: 'Crown St. Dental',style: 'serif' },
];

const markStyle = (s) => {
  switch (s) {
    case 'serif':       return { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.01em' };
    case 'serif-italic':return { fontFamily: 'Georgia, serif', fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.005em' };
    case 'sans-bold':   return { fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.03em', textTransform: 'uppercase', fontSize: 16 };
    case 'sans-thin':   return { fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.02em' };
    case 'mono':        return { fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '-0.01em' };
    default: return {};
  }
};

const LogoStrip = () => (
  <section className="fc-section fc-section--tight" style={{ paddingTop: 24, paddingBottom: 48 }}>
    <div className="fc-container">
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--fg-muted)',
        textAlign: 'center', marginBottom: 22,
      }}>
        Built for private practices across Europe & North America
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap',
        opacity: 0.7,
      }}>
        {ClinicMarks.map(m => (
          <div key={m.name} style={{
            fontSize: 18, color: 'var(--slate-400)',
            ...markStyle(m.style),
          }}>{m.name}</div>
        ))}
      </div>
    </div>
  </section>
);

window.LogoStrip = LogoStrip;
