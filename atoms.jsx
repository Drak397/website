/* Atoms shared across the marketing kit:
   - Button, Card, Tag, Eyebrow
   - Icon (Lucide-style inline SVGs)
   - Logo (mark + wordmark)
*/

const Button = ({ variant = 'primary', size = 'md', children, arrow = false, ...rest }) => {
  const cls = `fc-btn fc-btn-${variant} ${size === 'lg' ? 'fc-btn-lg' : size === 'sm' ? 'fc-btn-sm' : ''}`;
  return (
    <button className={cls} {...rest}>
      {children}
      {arrow && <span className="arrow">→</span>}
    </button>
  );
};

const Eyebrow = ({ children, style = {} }) => (
  <div className="fc-eyebrow" style={style}>{children}</div>
);

const Tag = ({ tone = 'neutral', children }) => {
  const palettes = {
    neutral: { bg: 'var(--ink-800)', fg: 'var(--fg-3)', bd: 'var(--ink-600)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--success)', bd: 'rgba(52,211,153,0.3)' },
    info:    { bg: 'var(--sky-glow)', fg: 'var(--sky-300)', bd: 'rgba(31, 92, 66, 0.3)' },
    warn:    { bg: 'var(--warning-soft)', fg: 'var(--warning)', bd: 'rgba(251,191,36,0.3)' },
  };
  const p = palettes[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 999,
      fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 12,
      background: p.bg, color: p.fg, border: `1px solid ${p.bd}`,
    }}>{children}</span>
  );
};

/* === Logo ===
   The mark is the Chevron Triple — three weighted ">" in ascending moss shades,
   reading as forward motion, automation, acceleration. */
const LogoMark = ({ size = 32, filled = true, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 160"
    style={{ flexShrink: 0, filter: glow ? 'drop-shadow(0 8px 24px rgba(31, 92, 66, 0.25))' : 'none' }}
    aria-hidden="true"
  >
    <polygon points="20,28 64,80 20,132 40,80" fill={filled ? '#ACCFBC' : 'none'} stroke={filled ? 'none' : 'var(--border-strong)'} strokeWidth={filled ? 0 : 4} strokeDasharray={filled ? '0' : '6 6'} />
    <polygon points="64,28 108,80 64,132 84,80" fill={filled ? '#287256' : 'none'} stroke={filled ? 'none' : 'var(--border-strong)'} strokeWidth={filled ? 0 : 4} strokeDasharray={filled ? '0' : '6 6'} />
    <polygon points="108,28 152,80 108,132 128,80" fill={filled ? '#1F5C42' : 'none'} stroke={filled ? 'none' : 'var(--border-strong)'} strokeWidth={filled ? 0 : 4} strokeDasharray={filled ? '0' : '6 6'} />
  </svg>
);

const Wordmark = ({ size = 28 }) => (
  <span style={{
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    fontSize: size,
    letterSpacing: '-0.055em',
    lineHeight: 1,
    color: 'var(--fg)',
    display: 'inline-flex',
    alignItems: 'baseline',
  }}>
    FillChair<span style={{
      color: 'var(--slate-3, #6F8079)',
      fontWeight: 600,
      letterSpacing: '-0.04em',
    }}>.io</span>
  </span>
);

const Logo = ({ size = 32, wordmarkSize = 22, glow = false }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
    <LogoMark size={size} glow={glow} />
    <Wordmark size={wordmarkSize} />
  </div>
);

/* === Icon === Lucide-style stroke icons, hand-picked subset. */
const ICON_PATHS = {
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  check:    'M20 6 9 17l-5-5',
  message:  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  star:     'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
  zap:      'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
  shield:   'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
  sparkles: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z M20 3v4 M22 5h-4 M4 17v2 M5 18H3',
  phone:    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  plus:     'M12 5v14 M5 12h14',
  minus:    'M5 12h14',
  x:        'M18 6 6 18 M6 6l12 12',
  arrowRight:'M5 12h14 M12 5l7 7-7 7',
  trending: 'm22 7-8.5 8.5-5-5L2 17 M16 7h6v6',
  bell:     'M10.268 21a2 2 0 0 0 3.464 0 M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
  inbox:    'M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
};

const Icon = ({ name, size = 18, color = 'currentColor', strokeWidth = 1.75 }) => {
  const d = ICON_PATHS[name];
  if (!d) return null;
  // Some icon paths use multiple subpaths separated by " M ". Split into <path>s.
  const paths = d.split(/\s(?=M)/).map(p => p.trim()).filter(Boolean);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
         style={{ flexShrink: 0 }} aria-hidden="true">
      {paths.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
};

/* Expose globally for other JSX files. */
Object.assign(window, { Button, Eyebrow, Tag, Logo, LogoMark, Wordmark, Icon });
