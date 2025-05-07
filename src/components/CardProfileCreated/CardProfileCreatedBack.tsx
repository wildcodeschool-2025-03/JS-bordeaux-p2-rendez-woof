import "./CardProfileCreated.css";
import type { Dog } from "../../types/Dog";

interface CardProfileProps {
	dog: Dog;
}

function CardProfileCreatedBack({ dog }: CardProfileProps) {
	return (
		<article className="cardMyProfileback">
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
					width="30"
					height="30"
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
		</article>
	);
}

export default CardProfileCreatedBack;
