import { useState, useEffect } from "react";
import { userService } from "../services/user.service";
import { IoMdClose } from "react-icons/io";

export function LoginSignup({ onLogin, onSignup }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    fullname: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const users = await userService.getUsers();
    setUsers(users);
  }

  function clearState() {
    setCredentials({ username: "", password: "", fullname: "", imgUrl: "" });
    setIsSignup(false);
  }

  function handleChange(ev) {
    const field = ev.target.name;
    const value = ev.target.value;
    setCredentials({ ...credentials, [field]: value });
  }

  function onLogin(ev = null) {
    if (ev) ev.preventDefault();
    if (!credentials.username) return;
    onLogin(credentials);
    clearState();
  }

  function onSignup(ev = null) {
    if (ev) ev.preventDefault();
    if (!credentials.username || !credentials.password || !credentials.fullname)
      return;
    onSignup(credentials);
    clearState();
  }

  function toggleSignup() {
    setIsSignup(!isSignup);
  }
  function toggleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="login-page">
      <p>
        <button className="btn-link" onClick={toggleSignup}>
          Signup
        </button>
        <button className="btn-link" onClick={toggleLogin}>
          Login
        </button>
      </p>
        <>
          {isLogin && (
            <div className="login-overlay">
            <div className="login-section">
              <div className="login-top">
                <div className="login-title">Login</div>
                <IoMdClose className="login-close" onClick={() => setIsLogin(false)}/>
              </div>
              <form className="login-form" onSubmit={onSignup}>
                <input
                  type="text"
                  name="fullname"
                  value={credentials.fullname}
                  placeholder="Fullname"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <button>Login</button>
              </form>
            </div>
          </div>
          )}
          {isSignup && (
            <div className="signup-overlay">
              <div className="signup-section">
                <div className="signup-top">
                  <div className="signup-title">Signup</div>
                  <IoMdClose className="signup-close" onClick={() => setIsSignup(false)}/>
                </div>
                <form className="signup-form" onSubmit={onSignup}>
                  <input
                    type="text"
                    name="fullname"
                    value={credentials.fullname}
                    placeholder="Fullname"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                  <button>Signup</button>
                </form>
              </div>
            </div>
          )}
        </>
    </div>
  );
}
