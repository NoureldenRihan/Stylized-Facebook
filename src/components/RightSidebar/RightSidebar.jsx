import style from "./RightSidebar.module.css";

function RightSidebar() {
  return (
    <div className={style.grouper}>
      <div className="sideSection">
        <div className={style.pages}>
          <h2 className={style.pagesHeader}>Your Pages</h2>
          <a href="https://www.linkedin.com/in/remon-magdy-223218230/">
            <div className={style.page}>
              <div className={style.pagePic}>
                <img
                  src="/Images/Remon Magdy Profile Picture.png"
                  alt="Web Designer refrence"
                />
              </div>
              <div className={style.pageInfo}>
                <h2 className={style.pageName}>Remon Magdy</h2>
                <h3 className={style.pageDesc}>Designer</h3>
              </div>
            </div>
          </a>
          <a href="https://nourelden-rihan.web.app/">
            <div className={style.page}>
              <div className={style.pagePic}>
                <img
                  src="/Images/Nourelden Rihan Profile Pic.jpg"
                  alt="Web Developer refrence"
                />
              </div>
              <div className={style.pageInfo}>
                <h2 className={style.pageName}>Nourelden Rihan</h2>
                <h3 className={style.pageDesc}>Developer</h3>
              </div>
            </div>
          </a>
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
