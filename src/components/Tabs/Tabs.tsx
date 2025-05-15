import { useState } from "react";
import "./Tabs.css";
import CardTidus from "../../components/CardTidus/CardTidus";
import { useScreen } from "../../contexts/ScreenContext";
import tidusProfile from "../../data/tidus.json";
import LikedDogsList from "../LikedDogsList/LikedDogsList";
import MyMatch from "../Match/myMatch";

function Tabs() {
	const [activeTab, setActiveTab] = useState("profil");
	const { isMobile } = useScreen();
	const tidus = tidusProfile;

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
					<MyMatch />
				</div>
			)}

			{activeTab === "profil" && (
				<div className="content">
					<div className="profileContainer">
						{isMobile ? (
							<div className="tidusProfile">
								<CardTidus tidus={tidus} context={isMobile} />
							</div>
						) : (
							<div className="tidusProfile">
								<CardTidus tidus={tidus} context="front" />
								<CardTidus tidus={tidus} context="back" />
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default Tabs;
