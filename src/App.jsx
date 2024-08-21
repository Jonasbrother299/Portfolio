import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"

import { Analytics } from "@vercel/analytics/react";

import Home from "./components/Home"
import Contact from "./components/Contact"
import Hero from "./components/Hero";

import Navbar from "./components/Navbar"
import React from 'react';

import "./styles/_main.scss";

// Lazy load the Preloader component
// const Preloader = React.lazy(() => import('./preload/preloader'));

export default function App() {

  const location = useLocation();
  const isProjectsRoute = location.pathname === '/slider';
  
  return (
    <>
      {!isProjectsRoute && <Navbar />}
      {/* {isProjectsRoute && (
        <div className="wrapper__close-icon" onClick={handleGoBack}>
           <img src={close} className="close-icon"/>
        </div>
      )} */}
      <Analytics />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}