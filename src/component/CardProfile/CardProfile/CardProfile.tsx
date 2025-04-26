import { useState } from "react";
import "./CardProfile.css";
import { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { LikesContext } from "../LikeContext/LikesContext";

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
	onLike: () => void;
}

function CardProfile({ dog, onLike }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const context = useContext(LikesContext);

	if (!context) {
		throw new Error("LikesContext est utilisé en dehors de LikesProvider");
	}

	const { addLike } = context;
	const handleLike = () => {
		addLike(dog);
		setIsFlipped(false);
		setTimeout(() => {
			onLike();
		}, 300);
	};

	const handleDislike = () => {
		setIsFlipped(false);
		setTimeout(() => {
			onLike();
		}, 300);
	};

	function flipCard() {
		setIsFlipped(!isFlipped);
	}

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<button type="button" className="cardProfile" onClick={flipCard}>
				<div className="cardTop">
					<div className="infoDog">
						<p className="nameDog">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p>{dog.city}</p>
					</div>
					<img
						src="src/assets/arrow-right-circle.png"
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
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleDislike();
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						aria-label="Refuser ce chien"
					>
						<img
							src="src/assets/x-circle.png"
							width="60"
							height="auto"
							alt=""
							style={{ cursor: "pointer" }}
						/>
					</button>
					<img
						src="src/assets/lineCard.png"
						alt="line card"
						width="1"
						height="60"
					/>

					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleLike();
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
					>
						<img src="src/assets/coeur.png" width="60" height="auto" alt="" />
					</button>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</button>
			<button type="button" className="cardProfileback" onClick={flipCard}>
				<div className="cardTop">
					<div className="infoDog">
						<p className="nameDog">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p>{dog.city}</p>
					</div>
					<img
						src="src/assets/arrow-right-circle.png"
						width="50"
						height="50"
						alt="logo-croix"
					/>
				</div>
				<div className="favorite-foods">
					<p>🍽️</p>
					<p>{dog.favorite_foods.join(", ")}</p>
				</div>
				<div className="phobias">
					<p>😱</p>
					<p>{dog.phobias.join(", ")}</p>
				</div>
				<div className="hobbies">
					<p>🎯</p>
					<p>{dog.hobbies.join(", ")}</p>
				</div>
				<div className="personnality">
					<p>🐶</p>
					<p>{dog.personality.join(", ")}</p>
				</div>
				<div className="logosProfile">
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleDislike();
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						aria-label="Refuser ce chien"
					>
						<img
							src="src/assets/x-circle.png"
							width="60"
							height="auto"
							alt="logo-croix"
							onKeyDown={flipCard}
						/>
					</button>
					<img
						src="src/assets/lineCard.png"
						alt="line card"
						width="1"
						height="60"
					/>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleLike();
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						aria-label="Aimer ce chien"
					>
						<img src="src/assets/coeur.png" width="60" height="auto" alt="" />
					</button>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</button>
		</ReactCardFlip>
	);
}

export default CardProfile;
