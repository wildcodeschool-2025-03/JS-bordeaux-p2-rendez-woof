import "./MyProfile.css";
import { useEffect, useState } from "react";
import CardProfileCreated from "../../components/CardProfileCreated/CardProfileCreated";
import CardProfileCreatedBack from "../../components/CardProfileCreated/CardProfileCreatedBack";
import CardProfileCreatedFront from "../../components/CardProfileCreated/CardProfileCreatedFront";
import { useScreen } from "../../contexts/ScreenContext";
import type { Dog } from "../../types/Dog";

function MyProfile() {
	const [dogs, setDogs] = useState<Dog[]>([]);
	const { isMobile } = useScreen();

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((response) => response.json())
			.then((data: Dog[]) => {
				setDogs(data.filter((dog) => dog.name.toLowerCase() === "tidus"));
			})
			.catch((error) => console.error("Fetch error:", error));
	}, []);

	return (
		<section className="profileContainer">
			{isMobile
				? dogs.map((dog) => (
						<div key={dog.id} className="tidusProfile">
							<CardProfileCreated dog={dog} />
						</div>
					))
				: dogs.map((dog) => (
						<div key={dog.id} className="tidusProfile">
							<CardProfileCreatedFront dog={dog} />
							<CardProfileCreatedBack dog={dog} />
						</div>
					))}
		</section>
	);
}

export default MyProfile;
