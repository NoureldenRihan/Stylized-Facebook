import style from "./Navbar.module.css";
import FacebookLogo from "../../SVGs/facebook.svg";
import search from "../../SVGs/search.svg";
import home from "../../SVGs/house.svg";
import video from "../../SVGs/camera-video.svg";
import bag from "../../SVGs/bag.svg";
import people from "../../SVGs/people.svg";
import games from "../../SVGs/dpad.svg";
import hex from "../../SVGs/hexagon.svg";
import messenger from "../../SVGs/messenger.svg";
import bell from "../../SVGs/bell-fill.svg";

function Navbar() {
  // SearchClick() Clears the Searchbar on Click
  function searchClick() {
    document.getElementById("search").value = "";
  }

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.search}>
          <div className={style.logo}>
            <a href="/">
              <img
                className={`${style.icon} Icon`}
                src={FacebookLogo}
                alt="Facebook Logo"
              />
            </a>
          </div>
          <div className={style.searchbar}>
            <input id="search" type="text" placeholder="Search Facebook" />
            <img
              className={`${style.icon} Icon`}
              src={search}
              alt="seacrh"
              onClick={searchClick}
            />
          </div>
        </div>
        <div className={style.feed}>
          <div className={style.icons}>
            <div className={style.miniFeedLogo}>
              <img
                className={`${style.icon} Icon`}
                src={FacebookLogo}
                alt="Facebook Logo"
              />
            </div>
            <div className={style.feedIcon}>
              <img className={`${style.icon} Icon`} src={home} alt="home" />
            </div>
            <div className={style.feedIcon}>
              <img className={`${style.icon} Icon`} src={video} alt="video" />
            </div>
            <div className={style.feedIcon}>
              <img className={`${style.icon} Icon`} src={bag} alt="bag" />
            </div>
            <div className={style.feedIcon}>
              <img className={`${style.icon} Icon`} src={people} alt="people" />
            </div>
            <div className={style.feedIcon}>
              <img className={`${style.icon} Icon`} src={games} alt="games" />
            </div>
            <div className={style.miniFeedIcon}>
              <img
                className={`${style.icon} Icon`}
                src={search}
                alt="seacrh"
                onClick={searchClick}
              />
            </div>
          </div>
        </div>
        <div className={style.profile}>
          <img
            className={`${style.icon} Icon ${style.imgIcon}`}
            src={hex}
            alt="hex"
          />
          <img
            className={`${style.icon} Icon ${style.imgIcon}`}
            src={messenger}
            alt="messenger"
          />
          <img
            className={`${style.icon} Icon ${style.imgIcon}`}
            src={bell}
            alt="bell"
          />
          <div className={style.profilePic}>
            <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="Profile" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
