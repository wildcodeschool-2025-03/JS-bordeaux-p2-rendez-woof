import { useState } from "react";
import "./CardProfile.css";
import ReactCardFlip from "react-card-flip";

interface CardProfileProps {
	dog: {
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
	};
}

function CardProfile({ dog }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	function flipCard() {
		setIsFlipped(!isFlipped);
	}

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<article className="cardProfile" onClick={flipCard} onKeyDown={flipCard}>
				<div className="cardTop">
					<div id="infoDog">
						<p id="nameDog">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p>{dog.city}</p>
					</div>
					<img
						src="src/assets/Arrow_right-circle.png"
						width="50"
						height="50"
						alt="logo-croix"
					/>
				</div>
				<img
					id="photoDog"
					src={dog.photo}
					alt={dog.name}
					width="280"
					height="200"
				/>
				<div className="logosProfile">
					<img
						src="src/assets/X_circle.png"
						width="60"
						height="auto"
						alt="logo-croix"
					/>
					<img
						src="src/assets/lineCard.png"
						alt="line card"
						width="1"
						height="60"
					/>
					<img
						src="src/assets/coeur_1.png"
						alt="logo-coeur"
						width="60"
						height="auto"
					/>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</article>
			<article
				className="cardProfileback"
				onClick={flipCard}
				onKeyDown={flipCard}
			>
				<div className="cardTop">
					<div id="infoDog">
						<p id="nameDog">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p>{dog.city}</p>
					</div>
					<img
						src="src/assets/Arrow_right-circle.png"
						width="50"
						height="50"
						alt="logo-croix"
					/>
				</div>
				<div className="personalityDog">
					<p>🍽️{dog.favorite_foods.join(", ")}</p>
					<p>😱{dog.phobias.join(", ")}</p>
					<p>🎯{dog.hobbies.join(", ")}</p>
					<p>🐶{dog.personality.join(", ")}</p>
				</div>
				<div className="logosProfile">
					<img
						src="src/assets/X_circle.png"
						width="60"
						height="auto"
						alt="logo-croix"
					/>
					<img
						src="src/assets/lineCard.png"
						alt="line card"
						width="1"
						height="60"
					/>
					<img
						src="src/assets/coeur_1.png"
						alt="logo-coeur"
						width="60"
						height="auto"
					/>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</article>
		</ReactCardFlip>
	);
}

export default CardProfile;
