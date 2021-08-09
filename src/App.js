import './App.scss';
import CTA from './components/cta';
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
        <CTA />
      </main>
    </>
  );
}

export default App;
