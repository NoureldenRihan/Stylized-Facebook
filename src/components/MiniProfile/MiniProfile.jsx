import style from "./MiniProfile.module.css";

function MiniProfile() {
  return (
    <div className={style.miniProfile}>
      <div className={style.pictureArea}>
        <div className={style.picture}>
          <img
            src="/Images/Nourelden Rihan Profile Pic.jpg"
            alt="Profile Icon"
          />
        </div>
        <h2 className={style.profileName}>Nourelden Rihan</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-people"></i>
        <h2 className={style.iconName}>Friends</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-envelope-fill"></i>
        <h2 className={style.iconName}>Events</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-person"></i>
        <h2 className={style.iconName}>Groups</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-shop"></i>
        <h2 className={style.iconName}>Marketplace</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-play-btn"></i>
        <h2 className={style.iconName}>Watch</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-calendar-range"></i>
        <h2 className={style.iconName}>Calender</h2>
      </div>
      <div className={style.sideItems}>
        <i className="bi bi-eye"></i>
        <h2 className={style.iconName}>See More</h2>
      </div>
    </div>
  );
}

export default MiniProfile;
