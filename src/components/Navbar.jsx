import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { close, Logo } from "../assets";
    
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const snap = useSnapshot(state);

  const [navOpen, setNavOpen] = useState(false);
  return (
    <AnimatePresence>
      <div className="nav">
        <div className="nav-container">
      
          <div className="navbar">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/"
                className="logo__link"
                onClick={() => setNavOpen(navOpen)}
              >
                - Jonas Mayer
              </Link>
            </motion.div>
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>
          <div
            className="nav-overlay"
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <div className="logocontainer">
              <img src={Logo} alt="Simon Brachmann Logo" className="navbar-logo" />
              </div>
            <ul className="nav-links">
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    opacity: navOpen ? "1" : "0",
                    transitionDuration: navOpen ? "2s" : "1s",
                    transitionDelay: navOpen ? "0.1s" : "0s",
                  }}
                >
                  Home
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    opacity: navOpen ? "1" : "0",
                    transitionDuration: navOpen ? "2s" : "1s",
                    transitionDelay: navOpen ? "0.1s" : "0s",
                  }}
                >
                  Projects
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
              <motion.li
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    opacity: navOpen ? "1" : "0",
                    transitionDuration: navOpen ? "2s" : "1s",
                    transitionDelay: navOpen ? "0.1s" : "0s",
                  }}
                >
                  Contact
                </Link>
                <div className="nav-item-wrapper"></div>
              </motion.li>
            </ul>
            <div className="nav-footer">
              <div
                className="location"
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                }}
              >
                <span>Hamburg, DE</span>
              </div>
              <div className="nav-social-media">
                <ul>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#"
                      target="_blank"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                      }}
                    >
                      Twitter
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="https://www.instagram.com/cymxn/?hl=en"
                      target="_blank" // Add this attribute to open the link in a new tab
                      rel="noopener noreferrer" // Add these security attributes for better practices
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                      }}
                    >
                      Instagram
                    </a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#"
                      target="_blank"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDuration: navOpen ? "2s" : "1s",
                      }}
                    >
                      LinkedIn
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
