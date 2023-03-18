import style from "./Post.module.css";

function Post() {
  return (
    <div className="mainSection">
      <div className={style.header}>
        <div className={style.imgHolder}>
          <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="User Pic" />
        </div>
        <div className={style.infoHolder}>
          <h2>Nourelden Rihan</h2>
          <h3>5 Hours</h3>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>
      <div className={style.body}>
        <h2 className={style.postText}>New Post!</h2>
        <div className={style.postImg}>
          <img src="/Images/Gem20.jpg" alt="Post Image" />
        </div>
        <div className={style.reactions}>
          <div className={style.reaction}>
            <i className="bi bi-hand-thumbs-up-fill"></i>
            <h2>Like</h2>
          </div>
          <div className={style.reaction}>
            <i className="bi bi-chat-dots"></i>
            <h2>Comment</h2>
          </div>
          <div className={style.reaction}>
            <i className="bi bi-share-fill"></i>
            <h2>Share</h2>
          </div>
        </div>
      </div>
      <hr className={style.separator} />
      <div className={style.footer}>
        <div className={style.footerHolder}>
          <div className={style.footerImg}>
            <img
              src="/Images/Nourelden Rihan Profile Pic.jpg"
              alt="User Picture"
            />
          </div>
          <div className={style.comment}>
            <input type="text" placeholder="Write a Comment" />
            <i className="bi bi-camera-fill"></i>
            <i className="bi bi-card-image"></i>
            <i className="bi bi-emoji-smile-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
