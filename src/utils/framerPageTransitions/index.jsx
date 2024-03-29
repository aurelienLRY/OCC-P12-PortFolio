import { motion } from "framer-motion";
import "./pageTransitions.scss";

const PageTransition = (OgComponent) => {
  return function withTransaction() {
    return (
      <>
        <OgComponent />
        <motion.div
          className="pageTransition-in"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 0, 0.36, 1] }}
        />
        <motion.div
          className="pageTransition-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 0, 0.36, 1] }}
        />
      </>
    );
  };
};

export default PageTransition;
