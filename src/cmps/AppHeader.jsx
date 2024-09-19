import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { login, logout, signup } from "../store/user.actions";
import { LoginSignup } from "./LoginSignup.jsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Card } from "./utils/Card.jsx";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoCodepen } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import SearchBar from "./SearchBar.jsx";

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();

  async function onLogin(credentials) {
    try {
      const user = await login(credentials);
      showSuccessMsg(`Welcome: ${user.fullname}`);
      navigate("/");
    } catch (err) {
      showErrorMsg("Cannot login");
    }
  }
  async function onSignup(credentials) {
    try {
      const user = await signup(credentials);
      showSuccessMsg(`Welcome new user: ${user.fullname}`);
      navigate("/");
    } catch (err) {
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

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onToggleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsModalOpen(false);
  };

  return (
    <header className="app-header">
      <nav className="nav-container wrapper">
        {/* <div className="nav-main-links">
          <NavLink to="">Home 🏠</NavLink>
          <NavLink to="car">Cars</NavLink>
          <NavLink to="chat">Chat</NavLink>
          <NavLink to="board">Boards</NavLink>
        </div> */}

        <div className="hamburger-menu">
          <div className="hamburger-wrapper" onClick={onToggleHamburger}>
            <GiHamburgerMenu size={24} className="hamburger-icon"/>
            <RxAvatar size={30} className="avatar-icon"/>
          </div>
          <IoGlobeOutline size={30} className="glob-icon"/>
          <div className="airbnb-text">
            <span>Airbnb-</span>
            <span>להציע את הבית ב</span>
          </div>
          {isMenuOpen && (
            <Card classes={"dropdown"}>
              <>
                {user ? (
                  <button onClick={onLogout}>Logout</button>
                ) : (
                  <section className="user-info">
                    <LoginSignup
                      onLogin={onLogin}
                      onSignup={onSignup}
                      onModalOpen={onModalOpen}
                      isModalOpen={isModalOpen}
                    />
                  </section>
                )}
                <NavLink to="about">About</NavLink>
                <NavLink to="review">Review</NavLink>
              </>
            </Card>
          )}
        </div>
        <IoLogoCodepen size={35} className="app-logo"/>
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
      <SearchBar/>
    </header>
  );
}
