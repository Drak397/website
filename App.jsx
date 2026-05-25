/* App.jsx — composes the marketing site. */

const App = () => {
  const openDemo = () => { window.location.href = 'booking.html'; };

  return (
    <div>
      <SiteHeader onBookDemo={openDemo} />
      <Hero onBookDemo={openDemo} />
      <LogoStrip />
      <Pillars />
      <HowItWorks />
      <Metrics />
      <ROICalculator onBookDemo={openDemo} />
      <Testimonial />
      <Faq />
      <CtaBand onBookDemo={openDemo} />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
