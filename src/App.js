import logo from "./images/logo.png";
import video from "./images/bg-video.mp4";
import code from "./images/code.png";
import "./App.css";
import container from "./images/Container.png";
const App = () => {
  return (
    <>
      <div>
        <video
          className="bg-video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <main className="top-section">
          <nav className="navbar">
            <div className="logo-section">
              <img src={logo} alt="logo" />
              <h4 className="title">EthAi</h4>
            </div>
            <div className="nav-items">
              <li>Features</li>
              <li>Why Us</li>
              <li>Tokenomics</li>
              <li>Roadmap</li>
            </div>
            <div className="btn-container">
              <button className="btn login">Login in</button>
              <button className="btn whitepaper">Whitepaper</button>
            </div>
          </nav>
          <div className="heading-section">
            <h2 className="headline-small">When Innovation Meets</h2>
            <h2 className="headline-small span">Innovation</h2>
            <h1 className="headline">When Innovation</h1>
            <h1 className="headline">
              Meets <span>Investment</span>
            </h1>
            <p className="head-desc">
              Empowering Trading Through Advanced Technology
            </p>
            <button className="open-btn">Open dApp</button>
          </div>
        </main>
      </div>
      <section className="feature-section-small">
        <h1>Our Features</h1>
      </section>
      <section className="feature-section">
        <div className="first-feature-section">
          <div className="div-box">
            <img src={code} alt="code" />
            <div>
              <h4>Trade Optimizer </h4>
              <p>
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity
              </p>
            </div>
          </div>
          <div className="feature-center">
            <div className="div-box">
              <h4> Market Insight </h4>
              <p>
                Stay ahead of the market. Get real-time updates on market
                trends, track top traders' movements, and spot signals from key
                influencers.
              </p>
            </div>
            <div
              className="div-box"
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Our Feature</h1>
            </div>
          </div>
          <div className="div-box">
            <img src={container} alt="container" style={{ width: "50%" }} />
            <h4>Risk Guard </h4>
            <p>
              Get alerts on market swings and potential risks before they impact
              your portfolio. This agent helps you navigate volatility and stay
              prepared for anything.
            </p>
          </div>
        </div>
        <div className="second-feature-section">
          <div className="div-box">
            <h4>Portfolio Sync </h4>
            <p>
              Easily manage your portfolio. You'll always know what you own, how
              it's performing, and where it’s headed.
            </p>
          </div>
          <div className="div-box">
            <h4>Opportunity Scout </h4>
            <p>
              Find exciting new projects, events and tokens that others might be
              missing. Identifying promising opportunities early, so you never
              miss out on the next big thing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
