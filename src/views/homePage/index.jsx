import "./style.scss";
import Particules from "../../components/particules";
import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="homepage" data-testid="homepage">
      <article className="homepage-content">
        <h2>Développeur Web Passionné !</h2>
        <p>
          Bienvenue dans mon univers où chaque clic vous invite à me découvrir.
          <br />
          Je suis Aurélien Leroy, professionnel du numérique depuis plus de 15
          ans et récemment formé aux technologies web.
        </p>

        <div className="homepage-btn">
          <Link to="/profile" className="btn">
            Mon profil
          </Link>
        </div>
      </article>
      <Particules />
    </main>
  );
}

export default Home;
