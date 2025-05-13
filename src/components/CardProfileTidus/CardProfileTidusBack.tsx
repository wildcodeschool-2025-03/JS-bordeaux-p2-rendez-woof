import "./CardProfileTidus.css";
import type { Dog } from "../../types/Dog";

interface CardProfileProps {
	tidus: Dog;
}

function CardProfileTidusBack({ tidus }: CardProfileProps) {
	return (
		<article className="cardMyProfileback">
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
	);
}

export default CardProfileTidusBack;
