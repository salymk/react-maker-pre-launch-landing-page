import './App.scss';

function App() {
  return (
    <>
      <header>
        <p>maker</p>
      </header>
      <section className="hero">
        <h1> Get paid for the work you love to do.</h1>
        <p>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
      </section>
      <section className="features">
        <div className="feature-container">
          <h3> Indulge your passions</h3>
          <p>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </p>
        </div>
        <div className="feature-container">
          <h3> Gain financial freedom</h3>
          <p>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </p>
        </div>
        <div className="feature-container">
          <h3>Choose your lifestyle</h3>
          <p>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </p>
        </div>
        <div className="feature-container">
          <h3> Work from anywhere</h3>
          <p>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </p>
        </div>
      </section>
      <section className="pricing">
        <h2>Our pricing plans</h2>
        <p>
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="card-header">
              <h4>Dip your toe</h4>
              <p>
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </p>
            </div>
            <div className="card-content">
              <h3>Free</h3>
              <div className="price-features">
                <p>Unlimited products</p>
                <p>Basic analytics</p>
                <p>Limited marketplace exposure</p>
                <p>10% fee per transaction</p>
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <div className="card-header">
              <h4>Dive right in</h4>
              <p>
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </p>
            </div>
            <div className="card-content">
              <h3>$25.00 /month</h3>
              <div className="price-features">
                <p>Custom domain</p>
                <p>Advanced analytics and reports</p>
                <p>High marketplace visibility</p>
                <p>5% fee per transaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Get notified when we launch</h2>
        <input placeholder="Email address" />
        <button type="submit"> Get notified</button>
      </section>
    </>
  );
}

export default App;
