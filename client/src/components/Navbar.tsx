import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#f7f4ed]">
      <div className="navbar__container">
        <Link to="/">
          <h1 className="font-extrabold flex justify-center text-2xl text-center items-center">
            Freedium
          </h1>
        </Link>
        <ul className="navbar__links">
          <li className="navbar__list">
            <Link to="/signin" className="navbar__link">
              Sign in
            </Link>
          </li>
          <li className="navbar__list">
            <Link to="/signup">
              <button className="navbar__button">Get started</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
