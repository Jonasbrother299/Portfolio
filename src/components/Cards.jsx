import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { work } from "../utils";

import { fadeIn, textVariant } from "../utils/motion";

function ServiceCard({ index, title, icon, description, button }) {
  return (
    <div className="card__wrapper">
      <h3 className="card__headline">{title}</h3>
      {/* <img src={icon} alt={title} className="card__image" /> */}
      <p className="card__description">{description}</p>
      <button className="button">{button}</button>
    </div>
  );
}

const Cards = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      for (const card of document.querySelectorAll(".card")) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsElement = document.querySelector("#cards");
    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove);

      return () => {
        cardsElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  const cardsNumber = ["", "", "", "", "", ""];

  return (
    <>
      <div className="wrapper_cards">
        <div id="cards">
          {work.map((work, index) => (
            <motion.div
              key={work.title + index}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            >
              <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                  <ServiceCard key={work.title} index={index} {...work} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;


