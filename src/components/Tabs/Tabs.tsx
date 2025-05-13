import { useState } from "react";
import "./Tabs.css";
import LikedDogsList from "../LikedDogsList/LikedDogsList";

function Tabs() {
	const [activeTab, setActiveTab] = useState("likes");

	return (
		<>
			<div className="button-group">
				<button
					type="button"
					className={`tab-button ${activeTab === "profil" ? "active" : ""}`}
					onClick={() => setActiveTab("profil")}
				>
					Mon profil
				</button>

				<button
					type="button"
					className={`tab-button ${activeTab === "likes" ? "active" : ""}`}
					onClick={() => setActiveTab("likes")}
				>
					Mes likes
				</button>

				<button
					type="button"
					className={`tab-button ${activeTab === "matchs" ? "active" : ""}`}
					onClick={() => setActiveTab("matchs")}
				>
					Mes matchs
				</button>
			</div>

			{activeTab === "likes" && (
				<div className="content">
					<LikedDogsList />
				</div>
			)}

			{activeTab === "matchs" && (
				<div className="content">
					<h1>😢 Vous n'avez pas encore de match 😢</h1>
				</div>
			)}

			{activeTab === "profil" && (
				<div className="content">
					<h1>Voici votre profil</h1>
				</div>
			)}
		</>
	);
}

export default Tabs;
