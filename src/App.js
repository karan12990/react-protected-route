import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Protected from './Protected';
import Home from './Home';
import About from './About';
import Profile from './Profile';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
