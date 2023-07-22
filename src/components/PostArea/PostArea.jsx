import style from "./PostArea.module.css";
import camera from "../../SVGs/camera-video.svg";
import card from "../../SVGs/card-image.svg";
import emoji from "../../SVGs/emoji-smile-fill.svg";

function PostArea() {
  return (
    <div className={style.post}>
      <div className={style.holder}>
        <div className={style.picHolder}>
          <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User" />
        </div>
        <input type="text" placeholder="What is on Your Mind ?" />
      </div>
      <hr className={style.separator} />
      <div className={style.options}>
        <div className={style.option}>
          <img className={`${style.icon} Icon`} src={camera} alt="camera" />
          <h2>Live Video</h2>
        </div>
        <div className={style.option}>
          <img className={`${style.icon} Icon`} src={card} alt="card" />
          <h2>Photo / Video</h2>
        </div>
        <div className={style.option}>
          <img className={`${style.icon} Icon`} src={emoji} alt="emoji" />
          <h2>Feeling / Activity</h2>
        </div>
      </div>
    </div>
  );
}

export default PostArea;
