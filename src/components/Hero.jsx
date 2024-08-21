import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { Link } from "react-router-dom";
import {
  headContentAnimation,
  slideAnimation,
} from "../utils/motion";

import transition from "../transition";
import state from "../store";
import Cards from "./Cards";
import { HeroPhoto } from "../assets";
import Home from './Home';

// import GradientBackground from "./canvas/Background/GradientBackground";

const Hero = () => {
  const aboutWrapperRef = useRef(null);
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects');
  };
    const handleClickContact = () => {
      navigate("/contact");
    };
  return (
    <>
    <Home/>
    </>
  );
}

export default transition(Hero);