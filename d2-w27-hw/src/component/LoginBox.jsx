import { useState } from 'react'
import '../index.css'

const LoginBox = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegister(false);
  };

  return (
    <div className="container">
      {!isLoggedIn ? ( isRegister ? (
          <div>
            <h2>Register Form</h2>
            <form onSubmit={handleRegister}>
              <input type="email" placeholder="Email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })
                }
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Жүйеге кіру қажет</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => setIsRegister(true)}>Register</button>
          </div>
        )
      ) : (
        <div>
          <h2>Бастапқы бетке қош келдіңіз</h2>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default LoginBox;
