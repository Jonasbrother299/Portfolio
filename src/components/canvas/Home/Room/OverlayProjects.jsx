import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../../../../store";
import Cards from "../../../Cards";

export default function OverlayProjects() {

    const snap = useSnapshot(state); 
  
    const variants = {
        hidden: { y: "100%", opacity: 0 }, 
        visible: { y: "0%", opacity: 1 }, 
        exit: { y: "100%", opacity: 0 },   
    };

    const data = snap.imageDetails[snap.clicked];

    if (!snap.clicked) return null;

  return (
    <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", stiffness: 60 }}
        className="overlay"
    >
      <div className="overlay-content">

      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{data.title}</h1>
       <p className="description">{data.description}</p>

       <h2 className="h2">Project Overview:</h2>
       <p className="text">{data.projectOverview}</p>
            <img className="image" src="./ImageSlider.png"></img>
       <h2 className="h2">Technologies and Frameworks Used:</h2>
       <Cards />

       <h2 className="h2">Features and Highlights:</h2>
       <p className="text">{data.featureAndHighliths}</p>

      <div style={{ marginBottom: "20px" }}>
          <h3>Color Palette</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {data.colorPalette.map((color, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        </div>

        <button
          style={{ fontSize: "20px", padding: "10px", cursor: "pointer" }}
          onClick={() => (state.clicked = false)} // Reset clicked to hide the overlay
        >
          Close
        </button>
        <h1></h1>
      </div>
    </motion.div>
  );
}