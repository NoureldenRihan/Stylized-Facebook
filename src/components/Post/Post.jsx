import style from "./Post.module.css";
import threedots from "../../SVGs/three-dots.svg";
import like from "../../SVGs/hand-thumbs-up-fill.svg";
import comment from "../../SVGs/chat.svg";
import share from "../../SVGs/share.svg";
import camera from "../../SVGs/camera-video.svg";
import card from "../../SVGs/card-image.svg";
import emoji from "../../SVGs/emoji-smile-fill.svg";

function Post(props) {
  return (
    <div className="mainSection">
      <div className={style.header}>
        <div className={style.imgHolder}>
          <img src={`/Images/${props.userImg}`} alt="User" />
        </div>
        <div className={style.infoHolder}>
          <h2>{props.userName}</h2>
          <h3>{props.time}</h3>
        </div>
        <img className={`${style.icon} Icon`} src={threedots} alt="threedots" />
      </div>
      <div className={style.body}>
        <h2 className={style.postText}>{props.postText}</h2>
        <div className={style.postImg}>
          <a href={props.imgRef}>
            <img src={`/Images/${props.postImg}`} alt="Post" />
          </a>
        </div>
        <div className={style.reactions}>
          <div className={style.reaction}>
            <img className={`${style.icon} Icon`} src={like} alt="like" />
            <h2>Like</h2>
          </div>
          <div className={style.reaction}>
            <img className={`${style.icon} Icon`} src={comment} alt="comment" />
            <h2>Comment</h2>
          </div>
          <div className={style.reaction}>
            <img className={`${style.icon} Icon`} src={share} alt="share" />
            <h2>Share</h2>
          </div>
        </div>
      </div>
      <hr className={style.separator} />
      <div className={style.footer}>
        <div className={style.footerHolder}>
          <div className={style.footerImg}>
            <img src={`/Images/${props.userImg}`} alt="User" />
          </div>
          <div className={style.comment}>
            <input type="text" placeholder="Write a Comment" />
            <img className={`${style.icon} Icon`} src={camera} alt="camera" />
            <img className={`${style.icon} Icon`} src={card} alt="card" />
            <img className={`${style.icon} Icon`} src={emoji} alt="emoji" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
