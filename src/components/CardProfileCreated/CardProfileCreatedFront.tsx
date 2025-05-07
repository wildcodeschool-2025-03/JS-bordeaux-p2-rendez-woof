import "./CardProfileCreated.css";
import type { Dog } from "../../types/Dog";

interface CardProfileProps {
	dog: Dog;
}

function CardProfileCreatedFront({ dog }: CardProfileProps) {
	return (
		<article className="cardMyProfile">
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
			<img className="photoMyProfile" src={dog.photo} alt={dog.name} />
		</article>
	);
}

export default CardProfileCreatedFront;
