import CardProfileTrash from "./CardProfileTrash";

interface Dog {
	id: number;
	name: string;
	age: number;
	size: string;
	photo: string;
	personality: string[];
	favorite_foods: string[];
	phobias: string[];
	hobbies: string[];
	city: string;
}

interface LikedDogsListProps {
	likedDogs: Dog[];
	onDelete: (id: number) => void;
}

const LikedDogsList = ({ likedDogs, onDelete }: LikedDogsListProps) => {
	return (
		<div className="cardList">
			{likedDogs.length > 0 ? (
				likedDogs.map((dog) => (
					<CardProfileTrash key={dog.id} dog={dog} onDelete={onDelete} />
				))
			) : (
				<p>Vous n'avez encore aimé aucun toutou 😢</p>
			)}
		</div>
	);
};

export default LikedDogsList;
