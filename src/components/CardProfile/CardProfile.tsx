import { useState } from "react";
import "./CardProfile.css";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import { toast } from "sonner";
import { type DogType, useLikes } from "../LikeContext/LikesContext";

interface CardProfile {
	dog: DogType;
	onRemove: () => void;
}

function CardProfile({ dog, onRemove }: CardProfile) {
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
	const handleLike = (dog: DogType) => {
		setLikedDogs((prev) => [...prev, dog]);
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

	if (!dog) return;

	return (
		<>
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
							alt="logo-flip"
						/>
					</div>
					<img className="photosDogs" src={dog.photo} alt={dog.name} />
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
							}}
							aria-label="Refuser ce chien"
						>
							<img
								src="src/assets/images/dislike_button.png"
								alt="logo croix"
							/>
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="séparation entre le bouton like et le bouton dislike"
						/>

						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike(dog);
								toast.success(`Tu as liké ${dog.name} !`);
							}}
						>
							<img src="src/assets/images/like_button.png" alt="logo coeur" />
						</button>
					</div>
				</motion.article>
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
					<div className="likeDislikeButtons">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleDislike();
							}}
							aria-label="Refuser ce chien"
						>
							<img
								src="src/assets/images/dislike_button.png"
								alt="bouton dislike"
							/>
						</button>
						<img
							src="src/assets/images/separation_like_dislike.png"
							alt="séparation entre le bouton like et le bouton dislike"
						/>
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleLike(dog);
								toast.success(`Tu as liké ${dog.name} !`);
							}}
							aria-label="Aimer ce chien"
						>
							<img src="src/assets/images/like_button.png" alt="bouton like" />
						</button>
					</div>
				</article>
			</ReactCardFlip>
		</>
	);
}

export default CardProfile;
