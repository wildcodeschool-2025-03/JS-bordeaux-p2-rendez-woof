import { useState } from "react";
import "./Likes.css";
import CardProfileTrash from "./CardProfileTrash";

const sampleProfil = [
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

function Likes() {
	const [activeTab, setActiveTab] = useState("likes");
	const [profiles, setProfiles] = useState(sampleProfil);

	const handleDelete = (id: number) => {
		setProfiles(profiles.filter((dog) => dog.id !== id));
	};

	return (
		<>
			<div className="button-group">
				<button
					type="button"
					className={`tab-button ${activeTab === "profil" ? "active" : ""}`}
					onClick={() => setActiveTab("profil")}
				>
					Mon profil
				</button>

				<button
					type="button"
					className={`tab-button ${activeTab === "likes" ? "active" : ""}`}
					onClick={() => setActiveTab("likes")}
				>
					Mes likes
				</button>

				<button
					type="button"
					className={`tab-button ${activeTab === "matchs" ? "active" : ""}`}
					onClick={() => setActiveTab("matchs")}
				>
					Mes matchs
				</button>
			</div>

			{activeTab === "likes" && (
				<div className="content">
					{profiles.map((dog) => (
						<CardProfileTrash
							key={dog.id}
							dog={dog}
							onDelete={() => handleDelete(dog.id)}
						/>
					))}
				</div>
			)}

			{activeTab === "matchs" && (
				<div className="content">
					<h1>😢 Vous n'avez pas encore de match 😢</h1>
				</div>
			)}

			{activeTab === "profil" && (
				<div className="content">
					<h1>Voici votre profil</h1>
					{/* Ajoute ici le contenu pour "Mon profil" */}
				</div>
			)}
		</>
	);
}

export default Likes;
