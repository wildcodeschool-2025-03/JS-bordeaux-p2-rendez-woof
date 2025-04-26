import { Link, Outlet } from "react-router";
import "./reset.css";
import { useState } from "react";
import "./App.css";
import CardProfile from "./component/CardProfile/CardProfile/CardProfile";

const sampleProfile = {
	id: 1,
	size: "Moyen",
	name: "Tidus",
	age: 2,
	city: "Bordeaux",
	photo: "https://i.ibb.co/SwWsVQQf/tidus-plage.png",
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
};

function App() {
	const handleNextProfile = () => {
		getProfile();
	};
	const [profile, setProfile] = useState(sampleProfile);
	const getProfile = () => {
		fetch("http://localhost:4000/dogs")
			.then((res) => res.json())
			.then((data) => {
				const randomIndex = Math.floor(Math.random() * data.length);
				const randomDog = data[randomIndex];
				setProfile(randomDog);
			});
	};
	return (
		<>
			<header>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/myProfile">Mon profil</Link>
					<Link to="/profiles">Découvrir des profils</Link>
				</nav>
			</header>
			<main>
				<Outlet />

				<div className="App">
					<CardProfile dog={profile} onLike={handleNextProfile} />
				</div>
			</main>
		</>
	);
}

export default App;
