import { useEffect, useState } from "react";
import CardProfile from "../CardProfile/CardProfile";
import "../Recommandations/Recommandations.css";
import useDogs from "../../API/API";
import { useScreen } from "../../contexts/ScreenContext";
import tidusProfile from "../../data/tidus.json";
import type { DogType } from "../LikeContext/LikesContext";

function MyMatch() {
	const [matchingDogs, setMatchingDogs] = useState<DogType[]>([]);
	const dogs = useDogs();
	const { isMobile } = useScreen();

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

			return commonTraits.length >= 6;
		});

		setMatchingDogs(result);
	}, [dogs]);

	const removeDogFromList = (id: number) => {
		setMatchingDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== id));
	};

	return (
		<div className="cards-grid">
			{matchingDogs.length !== 0 ? (
				matchingDogs
					.slice(0, isMobile ? 1 : 3)
					.map((dog) => (
						<CardProfile
							key={dog.id}
							dog={dog}
							onRemove={() => removeDogFromList(dog.id)}
							context="profiles"
						/>
					))
			) : (
				<h1>😢 Vous n'avez pas encore de match 😢</h1>
			)}
		</div>
	);
}

export default MyMatch;
