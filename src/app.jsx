import { DataProvider } from "./utils/context/dataContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
/* components*/
import Header from "./components/header";
import Footer from "./components/footer";
/* Pages */
import Home from "./views/homePage";
import ProfilePage from "./views/profilePage";
import ProjectPage from "./views/projectPage";
import NotFoundPage from "./views/noFound";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <DataProvider>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projet" element={<ProjectPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </AnimatePresence>
  );
}

export default App;
