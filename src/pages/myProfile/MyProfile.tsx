import "./MyProfile.css";
import CardProfileTidus from "../../components/CardProfileTidus/CardProfileTidus";
import CardProfileTidusBack from "../../components/CardProfileTidus/CardProfileTidusBack";
import CardProfileTidusFront from "../../components/CardProfileTidus/CardProfileTidusFront";
import { useScreen } from "../../contexts/ScreenContext";
import tidusProfile from "../../data/tidus.json";

function MyProfile() {
	const { isMobile } = useScreen();
	const tidus = tidusProfile;

	return (
		<section className="profileContainer">
			{isMobile ? (
				<div className="tidusProfile">
					<CardProfileTidus tidus={tidus} />
				</div>
			) : (
				<div className="tidusProfile">
					<CardProfileTidusFront tidus={tidus} />
					<CardProfileTidusBack tidus={tidus} />
				</div>
			)}
		</section>
	);
}

export default MyProfile;
