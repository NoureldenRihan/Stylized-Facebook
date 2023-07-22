import style from "./MiniProfile.module.css";
import people from "../../SVGs/people.svg";
import envelope from "../../SVGs/envelope.svg";
import person from "../../SVGs/person.svg";
import shop from "../../SVGs/shop.svg";
import play from "../../SVGs/play-btn.svg";
import calendar from "../../SVGs/calendar-range.svg";
import eye from "../../SVGs/eye.svg";

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
        <img className={`${style.icon} Icon`} src={people} alt="people" />
        <h2 className={style.iconName}>Friends</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={envelope} alt="envelope" />
        <h2 className={style.iconName}>Events</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={person} alt="person" />
        <h2 className={style.iconName}>Groups</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={shop} alt="shop" />
        <h2 className={style.iconName}>Marketplace</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={play} alt="play" />
        <h2 className={style.iconName}>Watch</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={calendar} alt="calendar" />
        <h2 className={style.iconName}>Calender</h2>
      </div>
      <div className={style.sideItems}>
        <img className={`${style.icon} Icon`} src={eye} alt="eye" />
        <h2 className={style.iconName}>See More</h2>
      </div>
    </div>
  );
}

export default MiniProfile;
