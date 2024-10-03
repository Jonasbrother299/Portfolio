import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../../../../store";
import Cards from "../../../Cards";

export default function OverlayProjects() {
  const snap = useSnapshot(state);

  const variants = {
    hidden: { y: "100%", opacity: 0 }, // Overlay startet unten und unsichtbar
    visible: { y: "0%", opacity: 1 },  // Overlay wird sichtbar und rutscht nach oben
    exit: { y: "100%", opacity: 0 },   // Overlay wird unsichtbar und rutscht wieder nach unten
  };

  const data = snap.imageDetails[snap.clicked];

  // Wenn kein Element geklickt wurde, nichts rendern
  if (!snap.clicked) return null;

  return (
    <AnimatePresence> {/* AnimatePresence sorgt dafür, dass die Exit-Animation korrekt ausgeführt wird */}
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
          <img className="image" src="./ImageSlider.png" alt="Project overview" />

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
            onClick={() => (state.clicked = false)} // Reset clicked, um das Overlay zu schließen
          >
            Close
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}