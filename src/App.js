import './App.scss';
import heroMobile from './assets/illustration-hero-mobile.png';
import bgHeroSquiggleSVG from './assets/bg-hero-squiggle.svg';
import passionsSVG from './assets/illustration-passions.svg';
import financialFreedomSVG from './assets/illustration-financial-freedom.svg';
import workAnywhereSVG from './assets/illustration-work-anywhere.svg';
import lifeStyleSVG from './assets/illustration-lifestyle.svg';

function App() {
  return (
    <>
      <header>
        {/* logo.svg */}
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35">
          <g fill="none" fillRule="evenodd">
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M51.444 25v-7.848c0-.744.206-1.35.618-1.818.412-.468.958-.702 1.638-.702.712 0 1.27.238 1.674.714.404.476.606 1.142.606 1.998V25h3.264v-7.848c0-.496.094-.934.282-1.314.188-.38.45-.676.786-.888.336-.212.732-.318 1.188-.318.712 0 1.27.238 1.674.714.404.476.606 1.142.606 1.998V25h3.264v-8.52c0-1.416-.378-2.562-1.134-3.438-.756-.876-1.874-1.314-3.354-1.314-.864 0-1.65.19-2.358.57a4.4 4.4 0 00-1.692 1.59l.092-.14-.055-.103a3.839 3.839 0 00-1.002-1.12l-.211-.149c-.652-.432-1.486-.648-2.502-.648-.888 0-1.69.196-2.406.588-.477.261-.89.585-1.237.97l-.149.175V12.04h-2.88V25h3.288zm22.32.36c1.12 0 2.046-.194 2.778-.582.57-.302 1.108-.75 1.617-1.345l.021-.025V25h2.856v-7.92c0-.592-.024-1.128-.072-1.608-.048-.48-.2-.96-.456-1.44-.456-.864-1.128-1.472-2.016-1.824-.888-.352-1.904-.528-3.048-.528-1.56 0-2.792.336-3.696 1.008a5.008 5.008 0 00-1.848 2.616l2.952.936c.208-.592.572-1.004 1.092-1.236.52-.232 1.02-.348 1.5-.348.864 0 1.48.18 1.848.54.258.252.425.604.502 1.056l.023.169-.52.077-.535.08-.514.076a41.67 41.67 0 00-2.256.39c-.664.136-1.236.292-1.716.468-.696.256-1.25.574-1.662.954-.412.38-.71.818-.894 1.314a4.695 4.695 0 00-.276 1.644c0 .72.166 1.378.498 1.974.332.596.82 1.072 1.464 1.428.644.356 1.43.534 2.358.534zm.696-2.568c-.376 0-.7-.056-.972-.168a1.39 1.39 0 01-.63-.486 1.297 1.297 0 01-.222-.762c0-.216.046-.412.138-.588.092-.176.236-.338.432-.486.196-.148.454-.286.774-.414.28-.104.604-.2.972-.288.368-.088.852-.186 1.452-.294.375-.068.822-.145 1.34-.233l.045-.007v.01c-.004.15-.01.312-.02.487l-.015.271a3.291 3.291 0 01-.294 1.23c-.088.184-.254.412-.498.684-.244.272-.572.514-.984.726-.412.212-.918.318-1.518.318zM87.468 25v-6.24L91.956 25h4.248l-4.992-6.48 4.68-6.48H91.86l-4.392 6.24V7.72h-3.312L84.132 25h3.336zm21.828-5.568c.136-1.568-.024-2.932-.48-4.092-.456-1.16-1.16-2.06-2.112-2.7-.952-.64-2.108-.96-3.468-.96-1.28 0-2.412.29-3.396.87-.984.58-1.756 1.394-2.316 2.442-.56 1.048-.84 2.28-.84 3.696 0 1.296.286 2.446.858 3.45a6.189 6.189 0 002.376 2.364c1.012.572 2.182.858 3.51.858a6.395 6.395 0 003.45-.984c1.052-.656 1.822-1.576 2.31-2.76l-3.264-.936c-.24.528-.588.932-1.044 1.212-.456.28-1.004.42-1.644.42-1.016 0-1.786-.33-2.31-.99-.363-.457-.6-1.045-.712-1.765l-.017-.125h9.099zm-3.303-2.424h-5.709l.023-.11c.112-.472.28-.875.503-1.21l.116-.162c.524-.676 1.342-1.014 2.454-1.014.952 0 1.638.29 2.058.87.258.357.437.854.537 1.491l.018.135zM115.284 25v-6.624c0-.496.068-.942.204-1.338.136-.396.336-.74.6-1.032.264-.292.588-.526.972-.702a3.584 3.584 0 011.29-.33c.476-.036.894.002 1.254.114V12.04a6.086 6.086 0 00-1.176-.03 5.403 5.403 0 00-1.14.204 4.184 4.184 0 00-1.02.45c-.408.24-.752.544-1.032.912-.112.147-.215.3-.31.46l-.05.092V12.04h-2.88V25h3.288z"
            />
            <path
              fill="#3EE9E5"
              d="M16 0c7.971 0 14.581 5.83 15.8 13.457A12.948 12.948 0 0135 21.97 13 13 0 0122.01 35a12.95 12.95 0 01-8.553-3.2C5.829 30.58 0 23.97 0 16 0 7.163 7.163 0 16 0zm5.977 9C14.8 9.013 8.99 14.84 9 22.016a12.97 12.97 0 004.457 9.783 16.126 16.126 0 003.846.149A11 11 0 0122.01 11a11.011 11.011 0 019.937 6.305C31.319 25.1 25.1 31.319 17.303 31.948a11.002 11.002 0 0014.644-14.643 16.117 16.117 0 00-.148-3.847A12.97 12.97 0 0021.977 9z"
            />
          </g>
        </svg>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <img className="hero-mobile" src={heroMobile} alt="hero mobile" />
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
        </section>
        <section className="features">
          <div className="feature-container">
            <img src={passionsSVG} alt="Indulge in your passion" />
            <h3> Indulge your passions</h3>
            <p>
              Your passions shouldn't be just for the weekend. Earn a living
              doing what you love.
            </p>
          </div>
          <div className="feature-container">
            <img src={financialFreedomSVG} alt="Gain financial freedom" />
            <h3> Gain financial freedom</h3>
            <p>
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </p>
          </div>
          <div className="feature-container">
            <img src={lifeStyleSVG} alt="Choose your lifestyle" />
            <h3>Choose your lifestyle</h3>
            <p>
              Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
              your week.
            </p>
          </div>
          <div className="feature-container">
            <img src={workAnywhereSVG} alt="Work from anywhere" />
            <h3> Work from anywhere</h3>
            <p>
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </p>
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
          <h2>Get notified when we launch</h2>
          <div className="form">
            <input placeholder="Email address" />
            <button type="submit"> Get notified</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
