import "./MyProfile.css";
import CardTidus from "../../components/CardTidus/CardTidus";
import { useScreen } from "../../contexts/ScreenContext";
import tidusProfile from "../../data/tidus.json";

function MyProfile() {
	const { isMobile } = useScreen();
	const tidus = tidusProfile;

	return (
		<section className="profileContainer">
			{isMobile ? (
				<CardTidus tidus={tidus} context={isMobile} />
			) : (
				<div className="tidusProfile">
					<CardTidus tidus={tidus} context="front" />
					<CardTidus tidus={tidus} context="back" />
				</div>
			)}
		</section>
	);
}

export default MyProfile;
