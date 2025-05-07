import { useCallback, useEffect, useState } from "react";
import "./CardProfile.css";
import ReactCardFlip from "react-card-flip";
import { toast } from "sonner";
import type { DogType } from "./LikeContext/LikesContext";

function CardProfile() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [dog, setDog] = useState<DogType | null>(null);
	const handleNextProfile = useCallback(async () => {
		const dogId = Math.floor(Math.random() * 20) + 1;
		const res = await fetch(
			`https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs/${dogId}`,
		);
		const randomDog = await res.json();
		setDog(randomDog);
	}, []);
	useEffect(() => {
		handleNextProfile();
	}, [handleNextProfile]);
	const handleRemove = () => {
		setIsFlipped(false);
		toast.success(`Tu as supprimé ${dog?.name} !`);
		setTimeout(() => {
			handleNextProfile();
		}, 300);
	};
	if (!dog) return null;
	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<article
				className="cardProfile"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyUp={() => setIsFlipped(!isFlipped)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setIsFlipped(!isFlipped);
					}
				}}
			>
				<div className="cardTop">
					<div className="infoDog">
						<p className="bold">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{dog.race}, {dog.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						className="iconFlipCard"
						alt="logo-flip"
					/>
				</div>
				<img className="photosDogs" src={dog.photo} alt={dog.name} />
				<div className="trashButtonWrapper">
					<img
						src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
						alt="Supprimer"
						width="40"
						onClick={(e) => {
							e.stopPropagation();
							handleRemove();
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								handleRemove();
							}
						}}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</article>
			<article
				className="cardProfileback"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyUp={() => setIsFlipped(!isFlipped)}
			>
				<div className="cardTop">
					<div className="infoDog">
						<p className="bold">
							{dog.name}, {dog.age} an{dog.age > 1 ? "s" : ""}
						</p>
						<p className="raceCityDog">
							{dog.race}, {dog.city}
						</p>
					</div>
					<img
						src="src/assets/images/icone_flipCard.png"
						className="iconFlipCard"
						alt="icone flip card"
					/>
				</div>
				<div className="descriptionsDog">
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">:knife_fork_plate:</p>
						<p>{dog.favorite_foods.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">:scream:</p>
						<p>{dog.phobias.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">:dart:</p>
						<p>{dog.hobbies.join(", ")}</p>
					</div>
					<div className="descriptionDog">
						<p className="iconeDescriptionDog">:dog:</p>
						<p>{dog.personality.join(", ")}</p>
					</div>
				</div>
				<div className="trashButtonWrapper">
					<img
						src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
						alt="Supprimer"
						width="40"
						onKeyUp={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								handleRemove();
							}
						}}
						onClick={(e) => {
							e.stopPropagation();
							handleRemove();
						}}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</article>
		</ReactCardFlip>
	);
}
export default CardProfile;
