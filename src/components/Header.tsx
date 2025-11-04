import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { FaUserCircle, FaSignOutAlt, FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/all-cars">All Cars</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/create-car">Add new car</NavLink>
              </li>
            </ul>
          </nav>
          <div className="avatar">
            <FaRegUserCircle
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            />
            <ul className={`userMenu ${isUserMenuOpen ? "active" : ""}`}>
              <li
                className="userMenuItem"
                onClick={() => setIsUserMenuOpen(false)}
              >
                <Link to="/profile">Profile</Link>
              </li>
              <li
                className="userMenuItem"
                onClick={() => setIsUserMenuOpen(false)}
              >
                <Link to="/settings">Settings</Link>
              </li>
              <li
                className="userMenuItem"
                onClick={() => {
                  setIsUserMenuOpen(false);
                }}
              >
                <span>LOG OUT</span>
                <FaSignOutAlt />
              </li>
            </ul>
          </div>
          <div className="userArea">
            <Link className="login" to="/login">
              <FaUserCircle />
              <span>LOG IN</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
