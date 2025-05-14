import { Link } from "react-router-dom"; // Importation de Link
import Profiles from "../profiles/Profiles";
import "./Home.css";

function Home() {
	return (
		<div className="home-container">
			<div className="top-bar">
				<div className="intro">
					<h1 className="title">
						Trouve le perfect match …<br />
						parce que même les truffes ont droit à l’amour !
					</h1>
					<p className="subtitle">
						Un site de rencontre exclusivement réservé aux chiens
					</p>
				</div>

				<aside className="dog-profile">
					<p className="woof">Complètement Woof !</p>
					<div className="dog-card">
						<img
							src="src/assets/images/Final Carroussel of prise de tête.png"
							alt="Tayuki"
							className="dog-image"
						/>
					</div>
				</aside>
			</div>

			{/* Utilisation de Link pour la navigation */}
			<Link to="/decouvrir-profiles">
				<button type="button" className="discover-button">
					Découvrir les profils
				</button>
			</Link>

			<section className="features">
				<div className="feature">
					<div className="icon">
						<img
							src="src/assets/images/match.png"
							alt="Match"
							className="icon-image"
						/>
					</div>
					<p>Trouve des amis proches …</p>
				</div>
				<div className="feature">
					<div className="icon">
						<img
							src="src/assets/images/heart.png"
							alt="Heart"
							className="icon-image"
						/>
					</div>
					<p>Match selon tes préférences</p>
				</div>
				<div className="feature">
					<div className="icon">
						<img
							src="src/assets/images/localisation.png"
							alt="Paw"
							className="icon-image"
						/>
					</div>
					<p>Localisation</p>
				</div>
			</section>

			<p>
				Dis leur ce que tu attends grâce aux badges ! Ce badge apparaîtra sur
				ton profil et permettra aux autres d’identifier rapidement ce que tu
				recherches
			</p>

			<section className="badges">
				<ul className="badge-list">
					<li>😺 Un partenaire pour faire du sport</li>
					<li>🍣 Un dîner pour briser la glace</li>
					<li>💍 Un engagement sur le long terme</li>
					<li>🌭 Une relation sans lendemain</li>
					<li>🧘‍♀️ Des sorties pour penser et prendre soin de soi</li>
				</ul>
			</section>
		</div>
	);
}

export default Home;
