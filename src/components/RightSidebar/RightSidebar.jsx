import style from "./RightSidebar.module.css";

function RightSidebar() {
  return (
    <div className={style.grouper}>
      <div className="sideSection">
        <div className={style.pages}>
          <h2 className={style.pagesHeader}>Your Pages</h2>
          <div className={style.page}>
            <div className={style.pagePic}>
              <img src="/Images/Elzero Web School.jpg" alt="Page" />
            </div>
            <h2 className={style.pageName}>Elzero Web School</h2>
          </div>
          <div className={style.page}>
            <div className={style.pagePic}>
              <img src="/Images/Elzero Web School.jpg" alt="Page" />
            </div>
            <h2 className={style.pageName}>Elzero Web School</h2>
          </div>
        </div>
      </div>
      <div className="sideSection">
        <div className={style.events}>
          <i className="bi bi-gift-fill"></i>
          <h2>Birthday Nourelden Rihan</h2>
        </div>
      </div>
      <div className="sideSection">
        <div className={style.friends}>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
          <div className={style.friend}>
            <div className={style.picture}>
              <img
                src="/Images/Nourelden Rihan Profile Pic.jpg"
                alt="Friend Profile"
              />
            </div>
            <h2 className={style.friendName}>User Name</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
