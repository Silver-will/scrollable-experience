import './Overlay.css'

export default function Overlay() {
    return (
      <div className="container">
        <header>
        <div className="brand">
          <img src="black_switch.png" width="40" height="35"/>
          <p>
            GAMING AT <strong>AFFORDABLE</strong> PRICES
          </p>
        </div>
        <div>
          <ul>
            <li>Learn</li>
            <li>SHOP NOW</li>
            <li>SELL US a CONSOLE</li>
          </ul>
        </div>
        <button>KNOW MORE</button>
        </header>
        <div className="main-wrapper">
        <section className="section section-1">
          <div className="wrapper">
            <h2>
              Strong Consoles at even <strong>Stronger Prices</strong>
            </h2>
            <p>
              Introducing our brand new console refurbishing service{' '}
              <strong> Offering affordable systems</strong>. Experience gaming on a machine equivalent to a
              brand new console at half the price<strong> Gaming is no longer expensive.</strong>
            </p>
          </div>
        </section>

        <section className="section section-2">
          <div className="wrapper">
            <h2>
              The <strong>Future</strong> of Affordable Entertainment
            </h2>
            <p>
              This breakthrough medicine goes beyond traditional treatments by directly{' '}
              <strong>targeting DNA to trigger cellular regeneration in the brain</strong>. With
              cutting-edge technology, it repairs and revitalizes neural pathways, offering
              unprecedented benefits for mental clarity and cognitive health.
            </p>
            <ul>
              <li>
                DNA-driven cell repair for long-lasting <strong>brain rejuvenation</strong>
              </li>
              <li>
                Enhanced <strong>memory and cognitive</strong> function
              </li>
              <li>
                Increased <strong>mental sharpness</strong> and focus
              </li>
              <li>
                Support for overall <strong>brain health and longevity</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>50%</h2>
              <p>
                Buy now and get 50% of on your first 3 purchases. It's quite literally highway
                robbery. There are no better deals.
              </p>
            </div>
            <div className="card">
              <h2>100%</h2>
              <p>
                A 100% chance of getting a full refund if our products fail to satisfy
                your needs.
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              BRAIN HEALTH <strong>BY THE NUMBERS</strong>
            </h2>
            <p>
              In clinical trials, this revolutionary medication has shown remarkable results. This
              cutting-edge treatment is proving to be a game-changer in brain health and longevity.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>The time is now</h3>
          <p>The path is forward</p>
          <div className="social">
            <img src="instagram.svg" width={30} />
            <img src="youtube.svg" width={30} />
            <img src="linkedin.svg" width={30} />
          </div>
          <p className="copyright">Copyright @andersonmancini.dev. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <img src="brand.svg" width={60} />

          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
    )
}