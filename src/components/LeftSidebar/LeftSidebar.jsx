import MiniProfile from "../MiniProfile/MiniProfile";
import ShortCuts from "../Shortcuts/Shortcuts";
import style from "./LeftSidebar.module.css";

function LeftSidebar() {
  return (
    <div className={style.grouper}>
      <div className="sideSection">
        <MiniProfile />
      </div>
      <div className="sideSection">
        <ShortCuts />
      </div>
    </div>
  );
}

export default LeftSidebar;
