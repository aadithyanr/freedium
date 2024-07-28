import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#f7f4ed]">
        <div className="navbar__container">
          <Link to="/">
            <h1 className="font-extrabold flex justify-center text-2xl text-center items-center">
              Freedium
            </h1>
          </Link>
          <ul className="navbar__links">
            <li className="navbar__list cursor-not-allowed">Our story</li>
            <li className="navbar__list cursor-not-allowed">Membership</li>
            <li className="navbar__list cursor-not-allowed">Write</li>
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
      <nav>
        <div className="bg-[linear-gradient(to_right,_#faedae_,_#fde349_,_#ffb412)] ">
          <div className="w-full max-w-[1200px] h-[48px] flex items-center mx-[auto] my-[0] justify-center ">
            <b>Be part of a better internet. </b> <u className="pl-[6px]">Get 20% off membership for a
            limited time</u>
          </div>
        </div>
      </nav>
    </>
  );
}
