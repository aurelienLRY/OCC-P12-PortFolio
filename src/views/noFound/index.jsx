import './style.scss'
import PageTransition from "../../utils/framerPageTransitions";

function NoFoundPage() {
  return (
<main className="nofoundpage " data-testid="noFoundPage">
  <h2>404</h2>
  <p>No found</p>
</main>
  )
}

export default  PageTransition(NoFoundPage);