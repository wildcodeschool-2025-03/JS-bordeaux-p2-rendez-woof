import "./CardProfile.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { toast } from "sonner";
import { type DogType, useLikes } from "../LikeContext/LikesContext";

interface CardProfileProps {
	context: "profiles" | "myprofile";
	dog: DogType;
	onRemove: () => void;
}

function CardProfile({ dog, onRemove, context }: CardProfileProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const { setLikedDogs } = useLikes();
	const [animationState, setAnimationState] = useState<
		"visible" | "like" | "dislike"
	>("visible");

	const animationVariation = {
		visible: { x: 0, y: 0, rotate: 0, opacity: 1 },
		like: { x: 200, y: 0, rotate: 0, opacity: 0 },
		dislike: { x: -200, y: 0, rotate: 0, opacity: 0 },
	};

	const handleLike = () => {
		setLikedDogs((prev) => [...prev, dog]);
		toast.success(`Tu as liké ${dog.name} !`);
		setIsFlipped(false);
		setTimeout(() => {
			setAnimationState("like");
		}, 300);
	};

	const handleDislike = () => {
		setIsFlipped(false);
		setTimeout(() => {
			setAnimationState("dislike");
		}, 300);
	};

	const handleRemove = () => {
		toast.success(`Tu as supprimé ${dog.name} !`);
		onRemove();
	};

	const handleFlipKey = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			setIsFlipped((prev) => !prev);
		}
	};

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<motion.article
				className="cardProfile"
				variants={animationVariation}
				initial="visible"
				animate={animationState}
				onAnimationComplete={() => {
					if (animationState !== "visible") {
						onRemove();
					}
				}}
				onClick={() => setIsFlipped(!isFlipped)}
				tabIndex={0}
				role="button"
				onKeyDown={handleFlipKey}
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
						alt="Retourner la carte"
					/>
				</div>
				<img className="photosDogs" src={dog.photo} alt={dog.name} />
				{context === "profiles" && (
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
							}}
							aria-label="Refuser ce chien"
						>
							<img src="src/assets/images/dislike_button.png" alt="Dislike" />
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="Séparation"
						/>
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike();
							}}
							aria-label="Aimer ce chien"
						>
							<img src="src/assets/images/like_button.png" alt="Like" />
						</button>
					</div>
				)}
				{context === "myprofile" && (
					<div className="trashButtonWrapper">
						<img
							src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
							alt="Supprimer"
							width="40"
							style={{ cursor: "pointer" }}
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
						/>
					</div>
				)}
			</motion.article>

			<article
				className="cardProfileback"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={handleFlipKey}
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
						alt="Retourner la carte"
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

				{context === "myprofile" && (
					<div className="trashButtonWrapper">
						<img
							src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
							alt="Supprimer"
							width="40"
							style={{ cursor: "pointer" }}
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
						/>
					</div>
				)}
				{context === "profiles" && (
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
							}}
							aria-label="Refuser ce chien"
						>
							<img src="src/assets/images/dislike_button.png" alt="Dislike" />
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="Séparation"
						/>
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike();
							}}
							aria-label="Aimer ce chien"
						>
							<img src="src/assets/images/like_button.png" alt="Like" />
						</button>
					</div>
				)}
			</article>
		</ReactCardFlip>
	);
}

export default CardProfile;
