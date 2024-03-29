import Skills from "../../components/skills";
import PageTransition from "../../utils/framerPageTransitions";
import "./style.scss";

function ProfilePage() {
  return (
    <main className="profilePage" data-testid="profile-page">
      <section className="profilePage-context">
        <article>
          <h2>Explorateur de l'Univers Numérique</h2>
          <p>
            Dans ma quête passionnée du monde digital, je me suis engagé dans
            une aventure exceptionnelle en devenant intégrateur web.
          </p>
          <p>
            Mon histoire avec la technologie remonte loin, évoquant avec émotion
            mes premiers pas sur un AMD K6, une étape déterminante dans mon
            immersion dans le jeu en réseau.
          </p>
          <p>
            Avec plus de 15 ans d'exploration et d'apprentissage dans cet
            écosystème dynamique, j'ai exploré une multitude de domaines tels
            que la photographie, l'audiovisuel et la réalité virtuelle. Ce
            parcours m'a doté d'une solide autonomie, d'une curiosité insatiable
            et d'un savoir-faire créatif.
          </p>
          <p>Maintenant, c'est au tour du web de devenir mon terrain de jeu.</p>
        </article>
      </section>
      <section className="profilePage-skills">
        <Skills />
      </section>


    </main>
  );
}

export default PageTransition(ProfilePage);
