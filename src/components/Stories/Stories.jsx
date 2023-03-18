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
            <img
              src="/Images/Nourelden Rihan Profile Pic.jpg"
              alt="User Photo"
            />
          </div>
          <img src="/Images/Gem20.jpg" alt="Story" />
          <h2 className={style.userName}>Nourelden Rihan</h2>
        </div>
        <div className={style.story}>
          <div className={style.user}>
            <img
              src="/Images/Nourelden Rihan Profile Pic.jpg"
              alt="User Photo"
            />
          </div>
          <img src="/Images/Gem19.jpg" alt="Story" />
          <h2 className={style.userName}>Nourelden Rihan</h2>
        </div>
        <div className={style.story}>
          <div className={style.user}>
            <img
              src="/Images/Nourelden Rihan Profile Pic.jpg"
              alt="User Photo"
            />
          </div>
          <img src="/Images/Gem20.jpg" alt="Story" />
          <h2 className={style.userName}>Nourelden Rihan</h2>
        </div>
      </div>
    </div>
  );
}

export default Stories;
