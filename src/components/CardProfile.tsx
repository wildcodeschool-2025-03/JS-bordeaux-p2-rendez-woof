import { useState } from "react";
import "./CardProfile.css";

import ReactCardFlip from "react-card-flip";

interface Dog {
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
}

interface CardProfileProps {
	dog: Dog;
	onDelete: (id: number) => void;
}

function CardProfile({ dog, onDelete }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isRemoving, setIsRemoving] = useState(false);

	const flipCard = () => {
		if (!isRemoving) setIsFlipped((prev) => !prev);
	};

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsRemoving(true);
		setTimeout(() => {
			onDelete(dog.id);
		}, 400);
	};

	const cardClass = `cardProfile ${isRemoving ? "removing" : ""}`;

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			{/* Face avant */}
			<article
				className={cardClass}
				onClick={flipCard}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") flipCard();
				}}
			>
				<div className="cardTop">
					<p>
						{dog.name}, {dog.age} ans
					</p>
					<p>{dog.city}</p>
				</div>
				<img src={dog.photo} alt={dog.name} width={280} height={200} />
				<div className="logosProfile">
					<img
						src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
						alt="Supprimer"
						width="40"
						onClick={handleDelete}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.stopPropagation();
								handleDelete({
									stopPropagation: () => {},
								} as React.MouseEvent);
							}
						}}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</article>

			{/* Face arrière */}
			<article
				className={cardClass}
				onClick={flipCard}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") flipCard();
				}}
			>
				<p>🍽️ {dog.favorite_foods.join(", ")}</p>
				<p>😱 {dog.phobias.join(", ")}</p>
				<p>🎯 {dog.hobbies.join(", ")}</p>
				<p>🐶 {dog.personality.join(", ")}</p>
			</article>
		</ReactCardFlip>
	);
}

export default CardProfile;
