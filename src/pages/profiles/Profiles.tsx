import CardProfile from "../../component/CardProfile/CardProfile";
import "../../component/CardProfile/CardProfile.css";

import "./Profiles.css";

function Profiles() {
	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>

				<CardProfile />
			</section>
			<section className="recommendations">
				<h2>
					Recommandations :<br />
					tu risques de trouver l'âme chien ici !
				</h2>
				<div className="profilesRecommended">
					<CardProfile />
				</div>
			</section>
		</main>
	);
}
export default Profiles;
