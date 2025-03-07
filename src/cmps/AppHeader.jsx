import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { login, logout, signup } from "../store/user.actions";
import { LoginSignup } from "./LoginSignup.jsx";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Card } from "./utils/Card.jsx";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoCodepen } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import SearchBar from "./SearchBar.jsx";

export function AppHeader({ SearchClicked }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((storeState) => storeState?.userModule?.user);
  const navigate = useNavigate();
  const [isMainFilterClose, setIsMainFilterClose] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsMainFilterClose("close-header");
      } else {
        setIsMainFilterClose("");
      }
    });
  }, []);

  async function onLogin(credentials) {
    try {
      const user = await login(credentials);
      showSuccessMsg(`Welcome: ${user.data.username}`);
      navigate("/air-bnb-full-stuck-project/");
      setIsMenuOpen(false);
    } catch (err) {
      console.log(err);
      showErrorMsg("Cannot login");
    }
  }
  async function onSignup(credentials) {
    try {
      const user = await signup(credentials);
      showSuccessMsg(`Welcome new user: ${user.data.username}`);
      setIsMenuOpen(false);
    } catch (err) {
      console.log(err);
      showErrorMsg("Cannot signup");
    }
  }
  async function onLogout() {
    try {
      await logout();
      navigate("/");
      showSuccessMsg(`Bye now`);
    } catch (err) {
      showErrorMsg("Cannot logout");
    }
  }

  const onToggleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <nav className="nav-container-wrapper">
        {/* <IoLogoCodepen size={35} className="app-logo" /> */}
        <img
          src="/src/assets/logos/airbnb-icon5414.logowik.svg"
          alt="Airbnb Logo"
          className="app-logo"
          style={{ width: "55px", height: "38px" }}
        />

        {/* /> */}
        <div className="hamburger-menu">
          <div className="airbnb-text">
            <span>Airbnb your home</span>
          </div>
          <IoGlobeOutline size={30} className="glob-icon" />
          <div className="hamburger-wrapper" onClick={onToggleHamburger}>
            <GiHamburgerMenu size={24} className="hamburger-icon" />
            <RxAvatar size={30} className="avatar-icon" />
          </div>
          {isMenuOpen && (
            <Card classes={"dropdown"}>
              <>
                {user ? (
                  <button onClick={onLogout}>Logout</button>
                ) : (
                  <section className="user-info">
                    <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                  </section>
                )}
              </>
            </Card>
          )}
        </div>
        {user && (
          <span className="user-info">
            <Link to={`user/${user._id}`}>
              {user.imgUrl && <img src={user.imgUrl} />}
              {user.fullname}
            </Link>
            <span className="score">{user.score?.toLocaleString()}</span>
          </span>
        )}
      </nav>
      <SearchBar
        isMainFilterClose={isMainFilterClose}
        SearchClicked={SearchClicked}
      />
    </header>
  );
}
