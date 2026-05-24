/* FAQ — accordion of common objections. */

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--ink-700)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '22px 0', background: 'transparent', border: 'none',
          textAlign: 'left', color: 'var(--fg)',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19,
          letterSpacing: '-0.02em', cursor: 'pointer',
        }}
      >
        <span style={{ paddingRight: 24 }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: open ? 'var(--sky-300)' : 'var(--ink-700)',
          color: open ? 'var(--accent-fg)' : 'var(--fg-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 180ms', flexShrink: 0,
        }}>
          <Icon name={open ? 'minus' : 'plus'} size={14} strokeWidth={2.5} />
        </span>
      </button>
      <div style={{
        maxHeight: open ? 240 : 0,
        overflow: 'hidden',
        transition: 'max-height 280ms cubic-bezier(0.2,0.7,0.2,1)',
      }}>
        <div style={{
          paddingBottom: 24, paddingRight: 60,
          color: 'var(--fg-3)', fontSize: 15, lineHeight: 1.6,
        }}>{a}</div>
      </div>
    </div>
  );
};

const Faq = () => (
  <section className="fc-section" id="faq">
    <div className="fc-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
      <div style={{ position: 'sticky', top: 100 }}>
        <Eyebrow>FAQ</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(36px, 4vw, 48px)', lineHeight: 1.05,
          letterSpacing: '-0.035em', marginTop: 20,
        }}>What practice owners ask us.</h2>
        <p style={{ marginTop: 18, color: 'var(--fg-3)', fontSize: 15, lineHeight: 1.55 }}>
          Still have a question? Email <a href="mailto:hello@fillchair.io" style={{ color: 'var(--accent)' }}>hello@fillchair.io</a> — a real person responds within a few hours.
        </p>
      </div>
      <div>
        <FaqItem defaultOpen
          q="Does my team have to use a new tool?"
          a="No. Your front desk keeps working in your existing PMS — Dentrix, Open Dental, whatever you use today. FillChair runs in the background and reports results to you by email." />
        <FaqItem
          q="Is it HIPAA-compliant?"
          a="Yes. We're built on HIPAA-eligible infrastructure with a signed BAA, end-to-end encryption, and SOC 2 Type II controls. Patient PHI never leaves our compliant environment." />
        <FaqItem
          q="What if a patient asks to stop receiving messages?"
          a="One-tap opt-out on every message. Their preference syncs back to your PMS so nobody on your team accidentally re-contacts them. Compliance is built in, not bolted on." />
        <FaqItem
          q="How fast will I see results?"
          a="Most practices see their first rebooked no-show within 7 days. Dormant reactivation campaigns send on day 14. Reviews typically start posting in the second week." />
        <FaqItem
          q="What's the contract?"
          a="There isn't one. Month-to-month, cancel any time. We also offer a 60-day money-back guarantee if you don't see positive ROI." />
        <FaqItem
          q="Will the messages sound like a robot?"
          a="No. During onboarding we tune every message to your practice's tone — formal, warm, casual, whatever fits. Patients respond like they're texting your front desk." />
      </div>
    </div>
  </section>
);

window.Faq = Faq;
