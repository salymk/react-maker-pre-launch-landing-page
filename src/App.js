import './App.scss';
import bgFooterSquiggle from './assets/bg-footer-squiggle.svg';
import Features from './components/features';

import Header from './components/header';
import Hero from './components/hero';
import Pricing from './components/pricing';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section className="cta">
          <img
            className="bg-footer-squiggle"
            src={bgFooterSquiggle}
            alt="Background footer squiggle"
          />
          <h2>Get notified when we launch</h2>
          <form className="form">
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
            />
            <button type="submit"> Get notified</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
