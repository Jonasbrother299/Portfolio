import transition from '../transition'
import CanvasHome from './canvas/Home/CanvasHome';
import OverlayProjects from './canvas/Home/Room/OverlayProjects';
import state from '../store';
import { AnimatePresence } from "framer-motion";

function OverlayCanvas() {

    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          zIndex: 40,
        }}
      >
        <a
          href="https://pmnd.rs/"
          style={{
            position: "absolute",
            bottom: 40,
            left: 90,
            fontSize: "13px",
          }}
        >
          {/* pmnd.rs
          <br />
          dev collective */}
        </a>
        {/* <div style={{ position: 'absolute', top: "50%", right: 40, color: "white", fontSize: '24px' }}>— Simon Brachmann</div> */}
        {/* <div
          className='OverlayCanvas__text-rb'
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            fontSize: "16px",
            color: "white",
          }}
        >
          Böblingen, DE
        </div> */}
      </div>
    );
  }

const Home = () => {

  return (
      <>
       <AnimatePresence> {/* Wrap the Overlay component */}
        {state.clicked && <OverlayProjects/>} {/* Only show Overlay when clicked */}
      </AnimatePresence>
       
        <OverlayCanvas />
        <CanvasHome />
      </>
  );
}

export default transition(Home)