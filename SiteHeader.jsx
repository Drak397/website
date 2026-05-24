const SiteHeader = ({ onBookDemo }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'How it works', href: '#how' },
    { label: 'ROI', href: '#roi' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250, 250, 247, 0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 240ms cubic-bezier(0.2,0.7,0.2,1)',
    }}>
      <div className="fc-container" style={{
        display: 'flex', alignItems: 'center', gap: 28,
        height: 72,
      }}>
        <a href="#top" style={{ display: 'inline-flex', textDecoration: 'none' }}>
          <Logo size={32} wordmarkSize={22} />
        </a>
        <nav style={{ display: 'flex', gap: 6, marginLeft: 16 }}>
          {navItems.map(n => (
            <a key={n.href} href={n.href} style={{
              padding: '8px 12px',
              fontSize: 14, fontWeight: 500,
              color: 'var(--fg-3)',
              textDecoration: 'none',
              borderRadius: 8,
              transition: 'color 180ms',
              whiteSpace: 'nowrap',
            }}
              onMouseOver={e => e.currentTarget.style.color = 'var(--fg)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--fg-3)'}
            >{n.label}</a>
          ))}
        </nav>
        <div style={{ flex: 1 }} />
        <a href="#login" style={{
          fontSize: 14, fontWeight: 500,
          color: 'var(--fg-3)', textDecoration: 'none',
          padding: '8px 12px',
        }}>Sign in</a>
        <Button variant="primary" arrow onClick={onBookDemo}>Book a demo</Button>
      </div>
    </header>
  );
};

window.SiteHeader = SiteHeader;
