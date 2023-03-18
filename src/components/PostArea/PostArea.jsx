import style from "./PostArea.module.css";

function PostArea() {
  return (
    <div className={style.post}>
      <div className={style.holder}>
        <div className={style.picHolder}>
          <img
            src="/Images/Nourelden Rihan Profile Pic.jpg"
            alt="User Picture"
          />
        </div>
        <input type="text" placeholder="What is on Your Mind ?" />
      </div>
      <hr className={style.separator} />
      <div className={style.options}>
        <div className={style.option}>
          <i className="bi bi-camera-video-fill" style={{ color: "red" }}></i>
          <h2>Live Video</h2>
        </div>
        <div className={style.option}>
          <i className="bi bi-card-image" style={{ color: "purple" }}></i>
          <h2>Photo / Video</h2>
        </div>
        <div className={style.option}>
          <i className="bi bi-emoji-smile-fill" style={{ color: "green" }}></i>
          <h2>Feeling / Activity</h2>
        </div>
      </div>
    </div>
  );
}

export default PostArea;
