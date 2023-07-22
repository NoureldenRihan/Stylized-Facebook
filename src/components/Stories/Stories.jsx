import style from "./Stories.module.css";
import video from "../../SVGs/camera-video.svg";
import person from "../../SVGs/person.svg";
import plus from "../../SVGs/plus.svg";

function Stories() {
  return (
    <div className={style.storiesSection}>
      <div className={style.options}>
        <div className={style.option}>
          <img className={`${style.icon} Icon`} src={person} alt="person" />
          <h2 className={style.optionName}>Stories</h2>
        </div>
        <div className={style.option}>
          <img className={`${style.icon} Icon`} src={video} alt="video" />
          <h2 className={style.optionName}>Reels</h2>
        </div>
      </div>
      <hr className={style.separator} />
      <div className={style.stories}>
        <div className={style.createStory}>
          <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="Story" />
          <div className="holder">
            <img className={`${style.icon} Icon`} src={plus} alt="plus" />
          </div>

          <h2>Create A Story</h2>
        </div>
        <div className={style.story}>
          <div className={style.user}>
            <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
          </div>
          <a href="https://www.instagram.com/p/Cm1uYNzoX4o/">
            <img src="/Images/Sunset.jfif" alt="Story" />
          </a>
          <h2 className={style.userName}>Nourelden Rihan</h2>
        </div>
        <div className={style.story}>
          <div className={style.user}>
            <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
          </div>
          <a href="https://www.instagram.com/p/Cp7YLS4oO2e/">
            <img src="/Images/Flower.jfif" alt="Story" />
          </a>
          <h2 className={style.userName}>Nourelden Rihan</h2>
        </div>
        <div className={style.story}>
          <div className={style.user}>
            <img
              src="/Images/Remon Magdy Profile Picture.png"
              alt="ًWeb Designer"
            />
          </div>
          <a href="https://www.linkedin.com/in/remon-magdy-223218230/">
            <img src="/Images/Remon Magdy Profile Picture.png" alt="Story" />
          </a>
          <h2 className={style.userName}>Remon Magdy</h2>
        </div>
      </div>
    </div>
  );
}

export default Stories;
