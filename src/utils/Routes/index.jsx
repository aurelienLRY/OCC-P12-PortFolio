import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* Pages */
import Home from "../../views/homePage";
import ProfilePage from "../../views/profilePage";
import ProjectPage from "../../views/projectPage";
import NotFoundPage from "../../views/noFound";

function Routeur() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projet" element={<ProjectPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routeur;
