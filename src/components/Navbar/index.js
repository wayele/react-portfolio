import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top ">
            <Link className="navbar-nav" to="/">
                HOME
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={
                                window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            ABOUT
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/resume"
                            className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
                        >
                            RESUME
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/works"
                            className={window.location.pathname === "/works" ? "nav-link active" : "nav-link"}
                        >
                            WORKS
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            CONTACT
              </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;