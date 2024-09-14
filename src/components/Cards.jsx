import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { work } from "../utils";
import { fadeIn } from "../utils/motion";

function ServiceCard({ index, title, icon, description, button }) {
  return (
    <div className="card__wrapper">
      <h3 className="card__headline">{title}</h3>
      <p className="card__description">{description}</p>
      {/* <button className="button">{button}</button> */}
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

  return (
    <>
      <div className="wrapper_cards">
        <div id="cards">
          {work.map((workItem, index) => (
            <motion.div
              key={workItem.title + index}
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)} // Pass direction, type, delay, duration
              initial="hidden" // Specify the hidden state from the fadeIn variant
              animate="show" // Specify the show state to animate in
            >
              <div className="card">
                <div className="card-border"></div>
                <div className="card-content">
                  <ServiceCard key={workItem.title} index={index} {...workItem} />
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