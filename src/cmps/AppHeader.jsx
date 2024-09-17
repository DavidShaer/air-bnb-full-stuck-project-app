import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { login, logout, signup } from "../store/user.actions";
import { LoginSignup } from "./LoginSignup.jsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Card } from "./utils/Card.jsx";

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
  }

  return (
    <header className="app-header">
      <nav className="nav-container wrapper">
        <div className="nav-main-links">
          <NavLink to="">Home 🏠</NavLink>
          <NavLink to="car">Cars</NavLink>
          <NavLink to="chat">Chat</NavLink>
          <NavLink to="board">Boards</NavLink>
        </div>

        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={onToggleHamburger} />
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
    </header>
  );
}
