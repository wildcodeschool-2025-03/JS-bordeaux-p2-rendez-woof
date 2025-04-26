import { useState } from "react";
import "./CardProfile.css";
import ReactCardFlip from "react-card-flip";

interface CardProfileProps {
	dog: {
		id: number;
		name: string;
		age: number;
		race: string;
		size: string;
		photo: string;
		personality: string[];
		favorite_foods: string[];
		phobias: string[];
		hobbies: string[];
		city: string;
	};
}

function CardProfile({ dog }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<article
				className="cardProfile"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={() => setIsFlipped(!isFlipped)}
			>
				<div className="cardTop">
					<div id="infoDog">
						<p className="bold">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{dog.race}, {dog.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						width="50"
						height="50"
						alt="icone flip-card"
					/>
				</div>
				<img id="photoDog" src={dog.photo} alt={dog.name} />
				<div className="likeDislikeButtons">
					<img
						src="src/assets/images/dislike_button.png"
						width="60"
						height="auto"
						alt="bouton dislike"
					/>
					<img
						src="src/assets/images/separation_like_dislike.png"
						alt="separation entre le bouton like et le bouton dislike"
						width="1"
						height="60"
					/>
					<img
						src="src/assets/images/like_button.png"
						alt="bouton like"
						width="60"
						height="auto"
					/>
				</div>
			</article>
			<article
				className="cardProfileback"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={() => setIsFlipped(!isFlipped)}
			>
				<div className="cardTop">
					<div id="infoDog">
						<p className="bold">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{dog.race}, {dog.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						width="50"
						height="50"
						alt="icone flip-card"
					/>
				</div>
				<div className="descriptionsDog">
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🍽️</p>
						<p>{dog.favorite_foods.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">😱</p>
						<p>{dog.phobias.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🎯</p>
						<p>{dog.hobbies.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🐶</p>
						<p>{dog.personality.join(", ")}</p>
					</div>
				</div>
				<div className="likeDislikeButtons">
					<img
						src="src/assets/images/dislike_button.png"
						width="60"
						height="auto"
						alt="bouton dislike"
					/>
					<img
						src="src/assets/images/separation_like_dislike.png"
						alt="separation entre le bouton like et le bouton dislike"
						width="1"
						height="60"
					/>
					<img
						src="src/assets/images/like_button.png"
						alt="bouton like"
						width="60"
						height="auto"
					/>
				</div>
			</article>
		</ReactCardFlip>
	);
}

export default CardProfile;
