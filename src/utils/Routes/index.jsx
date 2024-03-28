import { Route, Routes} from 'react-router-dom';

/* Pages */
import Home from '../../views/homePage';
import ProfilePage from '../../views/profilePage';
import ProjectPage from '../../views/projectPage';
import NotFoundPage from '../../views/noFound';


function Routeur() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projet" element={<ProjectPage />} />
        <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routeur