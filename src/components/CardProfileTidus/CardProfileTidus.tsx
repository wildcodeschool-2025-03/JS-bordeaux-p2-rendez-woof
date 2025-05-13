import "./CardProfileTidus.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import type { Dog } from "../../types/Dog";

interface CardProfileProps {
	tidus: Dog;
}

function CardProfileTidus({ tidus }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<article
				className="cardMyProfile"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={() => setIsFlipped(!isFlipped)}
			>
				<div className="cardTop">
					<div id="infoDog">
						<p className="bold">
							{tidus.name}, {tidus.age} an{tidus.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{tidus.race}, {tidus.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						width="30"
						height="30"
						alt="icone flip-card"
					/>
				</div>
				<img className="photoMyProfile" src={tidus.photo} alt={tidus.name} />
			</article>
			<article
				className="cardMyProfileback"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={() => setIsFlipped(!isFlipped)}
			>
				<div className="cardTop">
					<div id="infoDog">
						<p className="bold">
							{tidus.name}, {tidus.age} an{tidus.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{tidus.race}, {tidus.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						width="30"
						height="30"
						alt="icone flip-card"
					/>
				</div>
				<div className="descriptionsDog">
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🍽️</p>
						<p>{tidus.favorite_foods.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">😱</p>
						<p>{tidus.phobias.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🎯</p>
						<p>{tidus.hobbies.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">🐶</p>
						<p>{tidus.personality.join(", ")}</p>
					</div>
				</div>
			</article>
		</ReactCardFlip>
	);
}

export default CardProfileTidus;
