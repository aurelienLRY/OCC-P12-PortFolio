
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
/* Pages */
import Home from "../../views/homePage";
import ProfilePage from "../../views/profilePage";
import ProjectPage from "../../views/projectPage";
import NotFoundPage from "../../views/noFound";

/**
 * Renders the router component that handles the routing of different pages.
 * @returns {JSX.Element} The router component.
 */
function Routeur() {
  const location = useLocation();

  return (
 
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="loader"
          unmountOnExit
        >   
         <Routes location={location}>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projet" element={<ProjectPage />} />
          <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </CSSTransition>
      </SwitchTransition>
  
  );
}

export default Routeur;
