import style from "./Stories.module.css";

function Stories() {
  return (
    <div className={style.storiesSection}>
      <div className={style.options}>
        <div className={style.option}>
          <i className="bi bi-person-badge"></i>
          <h2 className={style.optionName}>Stories</h2>
        </div>
        <div className={style.option}>
          <i className="bi bi-camera-video-fill"></i>
          <h2 className={style.optionName}>Reels</h2>
        </div>
      </div>
      <hr className={style.separator} />
      <div className={style.stories}>
        <div className={style.createStory}>
          <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="Story" />
          <i className="bi bi-plus"></i>
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
