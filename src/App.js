import './App.scss';
import { Helmet } from 'react-helmet';
import CTA from './components/cta';
import Features from './components/features';
import Header from './components/header';
import Hero from './components/hero';
import Pricing from './components/pricing';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maker</title>
        <meta name="Maker pre-launch landing page" />
        <meta name="theme-color" content="#080C20" />
      </Helmet>
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
