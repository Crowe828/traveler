import { Button } from "./Button";
import Video from "../videos/video-1.mp4";
import "../App.css";
import "./Hero.css";

// Big video playing when a user arrives at the page
function Hero() {
  return (
    <div className="hero--container">
      {/* Video plays continuously */}
      <video src={Video} autoPlay loop muted />
      <h1>DESTINY IS CALLING</h1>
      <p>What are you waiting for?</p>
      <div className="hero--btns">
        {/* Links only go to example pages as this is not a completed application */}
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          JOIN TODAY
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAIlER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
