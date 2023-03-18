import Stories from "../Stories/Stories";
import PostArea from "../PostArea/PostArea";
import style from "./MainFeed.module.css";
import Posts from "../Posts/Posts";

function MainFeed() {
  return (
    <div className={style.grouper}>
      <div className="mainSection">
        <Stories />
      </div>
      <div className="mainSection">
        <PostArea />
      </div>
      <Posts />
    </div>
  );
}

export default MainFeed;
