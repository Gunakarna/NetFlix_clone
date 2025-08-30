import React, { useState } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.jpg";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCard/TitleCards";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const firebaseVideo =
    " https://firebasestorage.googleapis.com/v0/b/karnaappsgk.appspot.com/o/Netflix%2Fmerged_video.mp4?alt=media&token=e545e7b7-2ff9-4091-898c-27e3c9390f8f";

  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            When their idyllic pond life starts feeling cramped, a family of
            ducks embarks on a flight full of adventure
          </p>
          <div className="hero-btns">
            {/* Play Button */}
            <button className="btn" onClick={() => setShowVideo(true)}>
              <img src={play_icon} alt="" />
              Play
            </button>

            {/* Info Button */}
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>

          <TitleCards />
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"Upcoming movies"} category={"popular"} />
        <TitleCards title={"Favorite movies"} category={"top_rated"} />
        <TitleCards title={"Mustwatch movies"} category={"upcoming"} />
        <TitleCards title={"Blockbuster movies"} category={"now_playing"} />
        <TitleCards title={"Top movies"} category={"top_rated"} />
      </div>

      <Footer />

      {/* Fullscreen Video Overlay */}
      {showVideo && (
        <div className="video-fullscreen">
          <button className="close-btn" onClick={() => setShowVideo(false)}>
            ✖
          </button>
          <video className="fullscreen-video" controls autoPlay>
            <source src={firebaseVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Home;
