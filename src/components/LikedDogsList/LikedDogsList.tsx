import CardProfile from "../CardProfile/CardProfile";
import { useLikes } from "../LikeContext/LikesContext";

import "./LikedDogsList.css";

const LikedDogsList = () => {
	const { likedDogs, setLikedDogs } = useLikes();

	return (
		<div className="cardList">
			{likedDogs.length === 0 ? (
				<p className="noLikesMessage">🐾 Aucun like pour le moment 🐾</p>
			) : (
				likedDogs.map((dog) => (
					<CardProfile
						key={dog.id}
						dog={dog}
						onRemove={() =>
							setLikedDogs((prevDogs) =>
								prevDogs.filter((d) => d.id !== dog.id),
							)
						}
						context="myprofile"
					/>
				))
			)}
		</div>
	);
};

export default LikedDogsList;
