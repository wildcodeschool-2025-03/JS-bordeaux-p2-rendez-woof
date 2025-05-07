import { useEffect, useState } from "react";
import CardProfile from "../CardProfile/CardProfile";
import "../Recommandations/Recommandation.css";
import type { DogType } from "../LikeContext/LikesContext";
function Matchs() {
	const [matchingDogs, setMatchingDogs] = useState<DogType[]>([]);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((response) => response.json())
			.then((data) => {
				const dogs: DogType[] = data;
				const tidus = dogs.find((dog) => dog.name === "Tidus");

				if (!tidus) return;

				const traitsTidus = [
					...tidus.personality,
					...tidus.hobbies,
					...tidus.phobias,
					...tidus.favorite_foods,
				];

				const result = dogs.filter((dog) => {
					if (dog.name === "Tidus") return false;

					const dogTraits = [
						...dog.personality,
						...dog.hobbies,
						...dog.phobias,
						...dog.favorite_foods,
					];

					const commonTraits = dogTraits.filter((trait) =>
						traitsTidus.includes(trait),
					);

					return commonTraits.length >= 9;
				});

				setMatchingDogs(result);
			});
	}, []);

	const removeDogFromList = (id: number) => {
		setMatchingDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== id));
	};

	return (
		<div className="cards-grid">
			{matchingDogs.slice(1, 4).map((dog) => (
				<CardProfile
					key={dog.id}
					dog={dog}
					onRemove={() => removeDogFromList(dog.id)}
				/>
			))}
		</div>
	);
}

export default Matchs;
