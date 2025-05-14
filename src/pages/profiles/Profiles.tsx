import Recommandations from "../../components/Recommandations/Recommandations";
import "../../components/CardProfile/CardProfile.css";
import "./Profiles.css";
function Profiles() {
	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>
				<div className="Myprofile">x</div>
			</section>
			<section className="recommendations">
				<h2>
					<br />
					Recommandations : tu risques de trouver l'âme chien ici !
				</h2>
				<div className="profilesRecommended">
					<Recommandations />
				</div>
			</section>
		</main>
	);
}
export default Profiles;
