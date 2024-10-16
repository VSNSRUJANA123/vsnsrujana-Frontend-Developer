import logo from "./images/logo.png";
import video from "./images/bg-video.mp4";
import code from "./images/code.png";
import market from "./images/Container1.png";
import wallet from "./images/wallet.png";
import graph from "./images/graph.png";
import bg2 from "./images/bg2.mp4";
import Ai from "./images/AI.mp4";
import dount from "./images/Donut.png";
import preview from "./images/preview.png";
import preview2 from "./images/preview2.png";
import plus from "./images/plus.png";
import frame from "./images/Frame.png";
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
            <h2 className="headline-small text-2xl">When Innovation Meets</h2>
            <h2 className="headline-small span my-0.5">Innovation</h2>
            <h1 className="headline ">When Innovation</h1>
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
        <h1 className="feature-title text-2xl">Our Features</h1>
        <div className="feature-box-container">
          <div className="div-box">
            <img src={code} alt="code" />
            <div className="text-center my-2">
              <h4>Trade Optimizer </h4>
              <p>
                Find the right moments to buy or sell, with personalized trade
                suggestions designed to help you make the most of every
                opportunity
              </p>
            </div>
          </div>
          <div
            className="div-box"
            style={{ zIndex: "1", overflow: "hidden", position: "relative" }}
          >
            <img
              style={{
                zIndex: "-1",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
              }}
              src={market}
              alt="containers"
            />
            <h4> Market Insight </h4>
            <p>
              Stay ahead of the market. Get real-time updates on market trends,
              track top traders' movements, and spot signals from key
              influencers.
            </p>
          </div>
          <div className="div-box">
            <h4>Risk Guard </h4>
            <p>
              Get alerts on market swings and potential risks before they impact
              your portfolio. This agent helps you navigate volatility and stay
              prepared for anything.
            </p>
            <img
              src={container}
              alt="container"
              style={{ width: "50%", padding: "10px" }}
            />
          </div>
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
      <section className="feature-section">
        <div className="first-feature-section">
          <div className="div-box">
            <img src={code} alt="code" />
            <div>
              <h4 className="text-center my-lg-2">Trade Optimizer </h4>
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
              className="div-box our-feature"
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
      <section className="about-section flex flex-col p-10">
        <h1 className=" text-white font-bold text-center text-3xl">
          About EthAi
        </h1>
        <p className="my-3">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className=" btn whitepaper text-black">Read More</button>
        <div className="about-container flex  my-5 p-7 w-3/5 rounded-xl">
          <div>
            <div className="py-4">
              <img src={wallet} alt="wallet" />
              <h2 className="about-title">Know Your Assets</h2>
              <p>No more guesswork—get clear, trustable insights.</p>
            </div>
            <div>
              <img src={graph} alt="wallet" />
              <h2 className="about-title">Simple, Not Overwhelming</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laborum alias,
              </p>
            </div>
          </div>
          <div>
            <div className="py-4">
              <img src={wallet} alt="wallet" />
              <h2 className="about-title">Future-Proof</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laborum alias,
              </p>
            </div>
            <div>
              <img src={graph} alt="wallet" />
              <h2 className="about-title">Stay Ahead</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                laborum alias,
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dount-section">
        <h1 className="text-bold text-center text-white text-3xl">
          Tokenomics
        </h1>
        <div className="dount-container text-center">
          <img src={dount} alt="dount" />
          <div className="table rounded-lg  p-7 w-2/4 ">
            <ul>
              <li>Name</li>
              <li>Token Name</li>
              <li>Token standard</li>
              <li> Total Supply </li>
              <li>100 Million Tax</li>
            </ul>
            <ul>
              <li>: EthAi</li>
              <li>:$EthAi</li>
              <li>:$EthAi</li>
              <li>: 5%</li>
              <li>: 5%</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="roadmap-section">
        <h1 className="text-bold text-center text-white text-3xl my-10">
          Roadmap
        </h1>
        <div className="phases flex justify-around my-6">
          <div>
            <button className="bg-white border-0 p-2 rounded my-3">
              Phase1
            </button>
            <h1 className="text-bold  text-white text-xl leading-10 my-3">
              Kicking Off
            </h1>
            <ul className="text-white text-xs leading-7">
              <li>Launch of EthAi:Officially</li>
              <li>Development of Core Ai Agents</li>
              <li>User Onboarding Campaign</li>
            </ul>
          </div>
          <img src={preview} alt="preview" />
        </div>
        <div className="phases flex  justify-around my-6">
          <img className="preview2" src={preview2} alt="preview" />
          <div>
            <button className="bg-white border-0 p-2 rounded my-3">
              Phase1
            </button>
            <h1 className="text-bold  text-white text-xl leading-10 my-3">
              Kicking Off
            </h1>
            <ul className="text-white text-xs leading-10">
              <li>Launch of EthAi:Officially</li>
              <li>Development of Core Ai Agents</li>
              <li>User Onboarding Campaign</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="questions-section">
        <h1 className="text-center text-bold text-3xl text-white">
          Frequently Asked Questions
        </h1>
        <ul>
          <li className="flex text-white p-1">
            <img className="mx-3" src={plus} alt="plus" />
            <p>What is EthAi?</p>
          </li>
          <li className="flex text-white p-1">
            <img className="mx-3" src={plus} alt="plus" />
            <p>How can EthAi can help me as a Trader?</p>
          </li>
          <li className="flex text-white p-1">
            <img className="mx-3" src={plus} alt="plus" />
            <p>Who can use EthAi?</p>
          </li>
          <li className="flex text-white p-1">
            <img className="mx-3" src={plus} alt="plus" />
            <p>How does EthAi track smart money flow?</p>
          </li>
        </ul>
      </section>
      <section className="explore-section  p-14">
        <div className="explore-container">
          <h1 className="text-white text-center text-3xl my-7">
            Explore Our <span className="text-cyan-300">dApp</span>
          </h1>
          <p className="explore-para">
            EthAi is an AI-powered dApp designed to help traders make smarter,
            data-driven decisions. By tracking smart money flows, monitoring key
            wallets, and providing real-time market insights, EthAi empowers
            users to stay ahead of trends. The platform offers intuitive AI
            features for asset recommendations, market analysis, and
            personalized crypto Q&A, making it the ultimate tool for both novice
            and experienced traders.
          </p>
          <button className="btn whitepaper">Open dApp</button>
        </div>
      </section>
      <section className="footer ">
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <h4 className="title">EthAi</h4>
        </div>
        <img className="social-media my-5" src={frame} alt="social-media" />
      </section>
    </>
  );
};

export default App;
