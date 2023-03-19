import style from "./Navbar.module.css";

function Navbar() {
  // SearchClick() Clears the Searchbar on Click
  function searchClick() {
    document.getElementById("search").value = "";
  }

  // feedClick() removes any fill class from any other feed Icon and applies it to the clicked target Icon
  function feedClick(e) {
    [...document.getElementsByClassName("feedicon")].forEach((element) => {
      if (element.classList.contains("filled")) {
        element.className = element.className.slice(0, -12);
      }
    });

    if (!e.target.classList.contains("filled")) {
      let fillclass = e.target.className + "-fill filled";
      e.target.className = fillclass;
    }
  }

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.search}>
          <div className={style.logo}>
            <a href="/">
              <i className="Icon Logo bi bi-facebook"></i>
            </a>
          </div>
          <div className={style.searchbar}>
            <input id="search" type="text" placeholder="Search Facebook" />
            <i className="Icon bi bi-search" onClick={searchClick}></i>
          </div>
        </div>
        <div className={style.feed}>
          <div className={style.icons}>
            <div className={style.miniFeedLogo}>
              <i className="Icon bi bi-facebook"></i>
            </div>
            <div className={style.feedIcon}>
              <i
                className="Icon feedicon home bi bi-house-door"
                onClick={feedClick}
              ></i>
            </div>
            <div className={style.feedIcon}>
              <i
                className="Icon feedicon videos bi bi-camera-video"
                onClick={feedClick}
              ></i>
            </div>
            <div className={style.feedIcon}>
              <i
                className="Icon feedicon store bi bi-bag"
                onClick={feedClick}
              ></i>
            </div>
            <div className={style.feedIcon}>
              <i
                className="Icon feedicon groups bi bi-people"
                onClick={feedClick}
              ></i>
            </div>
            <div className={style.feedIcon}>
              <i
                className="Icon feedicon games bi bi-dpad"
                onClick={feedClick}
              ></i>
            </div>
            <div className={style.miniFeedIcon}>
              <i className="Icon home bi bi-search"></i>
            </div>
          </div>
        </div>
        <div className={style.profile}>
          <i className="Icon bi bi-hexagon"></i>
          <i className="Icon bi bi-messenger"></i>
          <i className="Icon bi bi-bell-fill"></i>
          <div className={style.profilePic}>
            <img src="/Images/Nourelden Rihan Profile Pic.jpg" alt="Profile" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
