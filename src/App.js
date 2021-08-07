import './App.scss';
import heroMobile from './assets/illustration-hero-mobile.png';
import bgHeroSquiggleSVG from './assets/bg-hero-squiggle.svg';
import bgHeroLeftSVG from './assets/illustration-hero-left.svg';
import bgHeroRightSVG from './assets/illustration-hero-right.svg';
import bgFooterSquiggle from './assets/bg-footer-squiggle.svg';

import passionsSVG from './assets/illustration-passions.svg';
import financialFreedomSVG from './assets/illustration-financial-freedom.svg';
import workAnywhereSVG from './assets/illustration-work-anywhere.svg';
import lifeStyleSVG from './assets/illustration-lifestyle.svg';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <img
            className="bg-hero-left"
            src={bgHeroLeftSVG}
            alt="Background hero left"
          />

          <div className="container">
            <img className="hero-mobile" src={heroMobile} alt="hero mobile" />
            <div className="hero-content">
              <img
                className="bg-hero-squiggle"
                src={bgHeroSquiggleSVG}
                alt="Background hero squiggle"
              />

              <h1>
                Get paid for the work you <span>love</span> to do.
              </h1>
              <p>
                The 9-5 grind is so last century. We believe in living life on
                your own terms. Whether you’re looking to escape the rat race or
                set up a side hustle, we’ve got you covered.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="42">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#3EE9E5"
                  strokeWidth="2"
                >
                  <rect width="24" height="40" x="1" y="1" rx="12" />
                  <rect width="4" height="4" x="11" y="12" rx="2" />
                </g>
              </svg>
            </div>
          </div>
          <img
            className="bg-hero-right"
            src={bgHeroRightSVG}
            alt="Background hero right"
          />
        </section>
        <section className="features">
          <div className="feature-container">
            <div className="feature-svg-container">
              <div className="svg-container">
                <div className="svg-background" />
                <img
                  className="passion-svg"
                  src={passionsSVG}
                  alt="Indulge in your passion"
                />
              </div>
            </div>
            <div className="feature-content">
              <h3> Indulge your passions</h3>
              <p>
                Your passions shouldn't be just for the weekend. Earn a living
                doing what you love.
              </p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-svg-container">
              <div className="svg-container">
                <div className="svg-background" />
                <img
                  className="financial-svg"
                  src={financialFreedomSVG}
                  alt="Gain financial freedom"
                />
              </div>
            </div>
            <div className="feature-content">
              <h3> Gain financial freedom</h3>
              <p>
                Start making money work for you. There’s nothing quite like
                earning while you sleep.
              </p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-svg-container">
              <div className="svg-container">
                <div className="svg-background" />
                <img
                  className="lifestyle-svg"
                  src={lifeStyleSVG}
                  alt="Choose your lifestyle"
                />
              </div>
            </div>
            <div className="feature-content">
              <h3>Choose your lifestyle</h3>
              <p>
                Own your daily schedule. Fancy a lie-in? Go for it! Take charge
                of your week.
              </p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature-svg-container">
              <div className="svg-container">
                <div className="svg-background" />
                <img
                  className="work-svg"
                  src={workAnywhereSVG}
                  alt="Work from anywhere"
                />
              </div>
            </div>
            <div className="feature-content">
              <h3> Work from anywhere</h3>
              <p>
                Selling online means not being pinned down. Want to work AND
                travel? Go for it!
              </p>
            </div>
          </div>
        </section>
        <section className="pricing">
          <div className="pricing-header">
            <h2>Our pricing plans</h2>
            <p>
              We only make money when our creators make money. Our plans are
              always affordable, and it’s completely free to get started.
            </p>
          </div>
          <div className="pricing-container">
            <div className="pricing-card">
              {/* icon-free.svg */}
              <svg
                className="pricing-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
              >
                <g fill="#3EE9E5">
                  <path d="M44.432 28.703h-26.2c-.658 0-1.191-.536-1.191-1.196V1.196c0-.66.533-1.196 1.19-1.196h26.2c.659 0 1.192.535 1.192 1.196v26.31c0 .661-.533 1.197-1.191 1.197zm-25.01-2.392h23.819V2.39H19.423v23.92z" />
                  <path d="M15.649 45.452C7.016 45.46.01 38.44 0 29.77c-.01-8.67 6.976-15.708 15.609-15.723 8.633-.015 15.645 6.998 15.664 15.667a15.737 15.737 0 01-4.563 11.122 15.604 15.604 0 01-11.061 4.616zm0-29.001a13.254 13.254 0 00-12.26 8.22 13.352 13.352 0 002.888 14.516 13.214 13.214 0 0014.462 2.86c4.953-2.075 8.172-6.944 8.153-12.333-.033-7.326-5.949-13.25-13.243-13.263z" />
                </g>
              </svg>
              <div className="card-header">
                <h3>Dip your toe</h3>
                <p>
                  Just getting started? No problem at all! Our free plan will
                  take you a long way.
                </p>
              </div>
              <div className="card-content">
                <h2>Free</h2>
                <div className="price-features">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Unlimited products</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Basic analytics</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Limited marketplace exposure</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>10% fee per transaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              {/* icon-paid.svg */}
              <svg
                className="pricing-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="65"
              >
                <g fill="#093F68">
                  <path d="M48.796 64.918H1.38c-.762 0-1.38-.62-1.38-1.384V1.384C0 .62.618 0 1.38 0h47.416c.763 0 1.38.62 1.38 1.385v62.149a1.378 1.378 0 01-1.38 1.385zm-46.035-2.77h44.655V2.77H2.76v59.379z" />
                  <path d="M37.382 58.053H8.463a1.38 1.38 0 01-1.145-.623 1.389 1.389 0 01-.125-1.288l14.453-35.464a1.38 1.38 0 012.553 0l14.467 35.464c.169.426.117.908-.138 1.288a1.38 1.38 0 01-1.146.623zm-26.862-2.77h24.847L22.943 24.818 10.52 55.283z" />
                  <path d="M40.558 30.659H15.463c-.762 0-1.38-.62-1.38-1.385V8.614c0-.765.618-1.385 1.38-1.385h25.095c.763 0 1.38.62 1.38 1.384v20.661c0 .765-.617 1.385-1.38 1.385zm-23.66-2.77h22.28V10H16.844l.055 17.89z" />
                </g>
              </svg>
              <div className="card-header">
                <h3>Dive right in</h3>
                <p>
                  Ready for the big time? Our paid plan will help you take your
                  business to the next level.
                </p>
              </div>
              <div className="card-content">
                <h2>
                  $25.00 <span>/month</span>
                </h2>
                <div className="price-features">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#093F68"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Custom domain</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Advanced analytics and reports</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>5% fee per transaction</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                    >
                      <path
                        fill="#3EE9E5"
                        d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                      />
                    </svg>
                    <p>Unlimited products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
