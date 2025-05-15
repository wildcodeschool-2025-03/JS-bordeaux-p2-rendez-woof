import "./Slider.css";
import { useEffect, useState } from "react";
import victor from "../../assets/images/Victor.jpg";
import penelope from "../../assets/images/penelope.jpg";
import simone from "../../assets/images/simone.jpg";

export default function Slider() {
	const imgSlider = [simone, penelope, victor];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % imgSlider.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [imgSlider.length]);
	[];

	return (
		<div className="slider">
			<div
				className="slideshow"
				style={{ backgroundImage: `url(${imgSlider[currentIndex]})` }}
			/>
		</div>
	);
}
