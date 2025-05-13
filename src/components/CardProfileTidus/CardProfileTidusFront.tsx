import "./CardProfileTidus.css";
import type { Dog } from "../../types/Dog";

interface CardProfileProps {
	tidus: Dog;
}

function CardProfileTidusFront({ tidus }: CardProfileProps) {
	return (
		<article className="cardMyProfile">
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
	);
}

export default CardProfileTidusFront;
