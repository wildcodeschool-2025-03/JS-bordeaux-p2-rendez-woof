import { useState } from "react";
import CardProfile from "./CardProfile";

type Dog = {
	id: number;
	name: string;
	breed: string;
	age: number;
	size: string;
	photo: string;
	personality: string[];
	favorite_foods: string[];
	phobias: string[];
	hobbies: string[];
	city: string;
};

const initialDogs: Dog[] = [
	/* tableau de chiens likés */
];

function LikedDogsList() {
	const [likedDogs, setLikedDogs] = useState(initialDogs);

	const handleDelete = (id: number) => {
		setLikedDogs((prev) => prev.filter((dog) => dog.id !== id));
	};

	return (
		<div className="cardList">
			{likedDogs.map((dog) => (
				<CardProfile key={dog.id} dog={dog} onDelete={handleDelete} />
			))}
		</div>
	);
}

export default LikedDogsList;
