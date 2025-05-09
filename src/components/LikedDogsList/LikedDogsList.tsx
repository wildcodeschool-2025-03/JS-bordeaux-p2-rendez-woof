import CardProfileTrash from "../CardProfileTrash";
import { useLikes } from "../LikeContext/LikesContext";

import "./LikedDogsList.css";

const LikedDogsList = () => {
	const { likedDogs, unlikeDogs } = useLikes();

	return (
		<div className="cardList">
			{likedDogs.length === 0 ? (
				<p className="noLikesMessage">🐾 Aucun like pour le moment 🐾</p>
			) : (
				likedDogs.map((dog) => (
					<CardProfileTrash
						key={dog.id}
						dog={dog}
						onDelete={() => unlikeDogs(dog.id)}
					/>
				))
			)}
		</div>
	);
};

export default LikedDogsList;
