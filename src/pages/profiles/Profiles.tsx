import { useEffect, useState } from "react";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./Profiles.css";

function Profiles() {
	const [dog, setDog] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/dogs")
			.then((response) => response.json())
			.then((data) => setDog(data));
	}, []);

	const threeDogs = dog.slice(1, 4);

	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>
				{dog.length > 0 ? (
					<CardProfile dog={dog[1]} />
				) : (
					<p>Chargement de profil</p>
				)}
			</section>
			<section className="recommendations">
				<h2>
					Recommandations :<br />
					tu risques de trouver l'âme chien ici !
				</h2>
				<div className="profilesRecommended">
					{dog.length > 0 ? (
						threeDogs.map((dog, index) => {
							return (
								<div key={dog.id} className={`card-${index + 1}`}>
									<CardProfile dog={dog} />
								</div>
							);
						})
					) : (
						<p>Chargement de profil</p>
					)}
				</div>
			</section>
		</main>
	);
}
export default Profiles;
