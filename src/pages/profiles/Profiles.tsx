import CardProfile from "../../components/CardProfile/CardProfile";
import "./Profiles.css";

const sampleProfile = [
	{
		id: 1,
		name: "Adèle",
		age: 3,
		size: "Moyen",
		photo: "https://placedog.net/500/280?id=1",
		city: "Bordeaux",
		personality: ["Canin romantique", "Loup-garou urbain", "Chiwawakado"],
		favorite_foods: [
			"Croquettes au caviar",
			"Pizza aux sardines",
			"Soupe de baballes",
		],
		phobias: ["Aspirateurs", "Reflets de lune", "Clowns en pantoufles"],
		hobbies: [
			"Regarder Netflix sans bouger",
			"Voler des chaussettes",
			"Faire semblant de dormir",
		],
	},
	{
		id: 2,
		name: "Pénélope",
		age: 5,
		size: "Moyen",
		photo: "https://placedog.net/500/280?id=2",
		city: "Bordeaux",
		personality: ["Canin romantique", "Loup-garou urbain", "Chiwawakado"],
		favorite_foods: [
			"Croquettes au caviar",
			"Pizza aux sardines",
			"Soupe de baballes",
		],
		phobias: ["Aspirateurs", "Reflets de lune", "Clowns en pantoufles"],
		hobbies: [
			"Regarder Netflix sans bouger",
			"Voler des chaussettes",
			"Faire semblant de dormir",
		],
	},
	{
		id: 3,
		name: "Henri",
		age: 8,
		size: "Grand",
		photo: "https://placedog.net/500/280?id=3",
		city: "Bordeaux",
		personality: ["Chien rebelle", "Bourrin affectif", "Chiwawakado"],
		favorite_foods: [
			"Tartare de tennis-balles",
			"Soupe de baballes",
			"Pizza aux sardines",
		],
		phobias: ["Pneus de trottinette", "Aspirateurs", "Clowns en pantoufles"],
		hobbies: [
			"Collectionner des cailloux",
			"Creuser des trous artistiques",
			"Regarder Netflix sans bouger",
		],
	},
];

function Profiles() {
	const profile = sampleProfile;

	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>
				<p>(filtres à venir)</p>
				<CardProfile dog={profile[0]} />
			</section>
			<section className="recommandations">
				<h2>
					Recommandations :<br />
					tu risques de trouver l'âme chien ici !
				</h2>
				<div className="profilesRecommended">
					<div className="card-1">
						<CardProfile dog={profile[0]} />
					</div>
					<div className="card-2">
						<CardProfile dog={profile[1]} />
					</div>
					<div className="card-3">
						<CardProfile dog={profile[2]} />
					</div>
				</div>
			</section>
		</main>
	);
}
export default Profiles;
