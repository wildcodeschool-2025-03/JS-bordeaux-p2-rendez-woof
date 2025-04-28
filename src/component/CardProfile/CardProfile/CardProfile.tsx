import { useCallback, useState } from "react";
import "./CardProfile.css";
import ReactCardFlip from "react-card-flip";
import { type DogType, useLikes } from "../LikeContext/LikesContext";
import { useEffect } from "react";
import { toast } from "sonner";

interface CardProfile {
	dog: DogType;
}

function CardProfile() {
	const [isFlipped, setIsFlipped] = useState(false);
	const { setLikedDogs } = useLikes();

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

	const handleLike = (dog: DogType) => {
		setLikedDogs((prev) => [...prev, dog]);
		setIsFlipped(false);
		setTimeout(() => {
			handleNextProfile();
		}, 300);
	};

	const handleDislike = () => {
		setIsFlipped(false);
		setTimeout(() => {
			handleNextProfile();
		}, 300);
	};

	if (!dog) return;

	return (
		<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
			<article
				className="cardProfile"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyUp={() => setIsFlipped(!isFlipped)}
			>
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
							toast.success(`Tu as dislike ${dog.name} !`);
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
						src="src/assets/line-card.png"
						alt="line card"
						width="1"
						height="60"
					/>

					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleLike(dog);
							toast.success(`Tu as liké ${dog.name} !`);
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
					>
						<img src="src/assets/heart.png" width="60" height="auto" alt="" />
					</button>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</article>
			<article
				className="cardProfileback"
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyUp={() => setIsFlipped(!isFlipped)}
			>
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
							toast.success(`Tu as dislike ${dog.name} !`);
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						aria-label="Refuser ce chien"
					>
						<img
							src="src/assets/x-circle.png"
							width="60"
							height="auto"
							alt="logo-croix"
						/>
					</button>
					<img
						src="src/assets/line-card.png"
						alt="line card"
						width="1"
						height="60"
					/>
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							handleLike(dog);
							toast.success(`Tu as liké ${dog.name} !`);
						}}
						style={{ background: "none", border: "none", cursor: "pointer" }}
						aria-label="Aimer ce chien"
					>
						<img src="src/assets/heart.png" width="60" height="auto" alt="" />
					</button>
				</div>
				<img src="src/assets/dots.png" alt="dots" width="30" height="auto" />
			</article>
		</ReactCardFlip>
	);
}

export default CardProfile;
