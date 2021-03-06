import { IconButton } from "@material-ui/core";
import {
  ArrowRightAltRounded,
  EmailOutlined,
  Instagram,
  LinkedIn,
  Menu,
} from "@material-ui/icons";
import "./App.scss";
import { AppCubeMove, generateXY, homeNavsMouseEnter } from "./MouseFunctions";
// import Preloader from "./Components/Preloader/Preloader";

function App() {
  var move = true;

  return (
    <div
      onMouseMove={(e) => {
        AppCubeMove(e, move);
        document.querySelector(".cursor").style.top = `${e.pageY}px`;
        document.querySelector(".cursor").style.left = `${e.pageX}px`;
      }}
      className="App"
    >
      {/* <nav>
        <div className="nav__Brand">
          <h3>&lt;Frontend /&gt;</h3>
          <IconButton
            onTouchStart={() => {
              var ulDisplay = document.querySelector("ul").style.display;
              document.querySelector("ul").style.display = "block";
              if (ulDisplay === "block") {
                document.querySelector("ul").style.display = "none";
              } else {
                document.querySelector("ul").style.display = "block";
              }
            }}
            className="menu"
          >
            <Menu />
          </IconButton>
        </div>
        <ul>
          <li>
            <h5>About</h5>
          </li>
          <li>
            <h5>Work</h5>
          </li>
          <li>
            <h5>Contact</h5>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Siddhant Dalvi</h1>
        <h3>Front-end engineer</h3>
          </div> */}
      <span
        onMouseEnter={() => {
          move = false;
          homeNavsMouseEnter("rotateX(180deg)");
        }}
        onMouseLeave={(e) => {
          move = true;
        }}
        className="home__navs nav__about cursor__hover"
      >
        <ArrowRightAltRounded className="arrows" />
        <h1>About</h1>
      </span>
      <span
        onMouseEnter={() => {
          move = false;
          homeNavsMouseEnter("rotateX(270deg)");
        }}
        onMouseLeave={(e) => {
          move = true;
        }}
        className="home__navs nav__work cursor__hover"
      >
        <ArrowRightAltRounded className="arrows" />
        <h1>Work</h1>
      </span>
      <span
        onMouseEnter={() => {
          move = false;
          homeNavsMouseEnter("rotateX(90deg)");
        }}
        onMouseLeave={(e) => {
          move = true;
        }}
        className="home__navs nav__contact cursor__hover"
      >
        <ArrowRightAltRounded className="arrows" />
        <h1>Contact</h1>
      </span>
      <section className="container">
        <div
          onMouseEnter={() => {
            move = false;
            homeNavsMouseEnter("rotateX(0deg)");
          }}
          onMouseLeave={() => {
            move = true;
          }}
          id="cube"
        >
          <figure className="front">
            <div className="front-intro">
              <h3>
                Hi all, I'm Sid 👋
                <br /> Front-end Engineer <br /> Working on web-apps <br />
                Familiar with various frameworks and libraries
              </h3>
            </div>
          </figure>
          <figure className="back">
            <div className="intro">
              <h4>
                Currently a student pursuing BSC IT and working as a freelancer.
                Always trying to learn more functionalities in Web-Apps, making
                them more Progressive and Awesome!
              </h4>
            </div>
          </figure>
          <figure className="right">
            <span className="cube__idle">
              <EmailOutlined id="email" />
              <Instagram id="insta" />
            </span>
          </figure>
          <figure className="left">
            <span className="cube__idle">
              <LinkedIn id="linkedin" />
            </span>
          </figure>
          <figure className="top">
            <h4>
              Some of my latest additions to the work is an extremely fun
              Treasure Hunt for developers & Blog site using various functional
              components which is scalable as per request.
            </h4>
          </figure>
          <figure className="bottom">
            <h1>Your turn, Lets Talk!</h1>
          </figure>
        </div>
      </section>
      <div className="contact__icons">
        <a
          className="cursor__hover"
          href="https://www.google.com"
          onMouseOver={() => {
            move = false;
            generateXY();

            setTimeout(() => {
              document.querySelector("#email").style.opacity = "1";
              document.querySelector(
                "#cube"
              ).style.transform = `rotateY(270deg)`;
            }, 500);
          }}
          onMouseLeave={() => {
            move = true;
            document.querySelector("#email").style.opacity = "0";
          }}
        >
          <EmailOutlined />
        </a>
        <a
          className="cursor__hover"
          href="foo"
          onMouseEnter={() => {
            move = false;
            generateXY();

            setTimeout(() => {
              document.querySelector("#insta").style.opacity = "1";
              document.querySelector(
                "#cube"
              ).style.transform = `rotateY(270deg)`;
            }, 500);
          }}
          onMouseLeave={() => {
            move = true;
            document.querySelector("#insta").style.opacity = "0";
          }}
        >
          <Instagram />
        </a>
        <a
          className="cursor__hover"
          href="foo"
          onMouseEnter={() => {
            move = false;
            generateXY();

            setTimeout(() => {
              document.querySelector("#linkedin").style.opacity = "1";
              document.querySelector(
                "#cube"
              ).style.transform = `rotateY(90deg)`;
            }, 500);
          }}
          onMouseLeave={() => {
            move = true;
            document.querySelector("#linkedin").style.opacity = "0";
          }}
        >
          <LinkedIn />
        </a>
      </div>
      <span className="cursor"></span>
    </div>
  );
}

export default App;
