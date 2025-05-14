import { useEffect, useState } from "react";
import CardProfile from "../CardProfile/CardProfile";
import "../Recommandations/Recommandations.css";
import useDogs from "../../API/API";
import tidusProfile from "../../data/tidus.json";
import type { DogType } from "../LikeContext/LikesContext";

function myMatch() {
	const [matchingDogs, setMatchingDogs] = useState<DogType[]>([]);
	const dogs = useDogs();

	useEffect(() => {
		if (dogs.length === 0) return;

		const traitsTidus = [
			...tidusProfile.personality,
			...tidusProfile.hobbies,
			...tidusProfile.phobias,
			...tidusProfile.favorite_foods,
		];

		const result = dogs.filter((dog) => {
			const dogTraits = [
				...dog.personality,
				...dog.hobbies,
				...dog.phobias,
				...dog.favorite_foods,
			];

			const commonTraits = dogTraits.filter((trait) =>
				traitsTidus.includes(trait),
			);

			return commonTraits.length >= 8;
		});

		setMatchingDogs(result);
	}, [dogs]);

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

export default myMatch;
