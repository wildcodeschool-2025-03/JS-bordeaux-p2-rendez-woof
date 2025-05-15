import "./Header.css";
import { Link } from "react-router";

function Header() {
	return (
		<header>
			<div className="title">
				<img
					className="logoSite"
					src="src/assets/images/logo_site.png"
					alt="logo"
					width="50"
					height="50"
				/>
				<h1>RENDEZ-WOOF</h1>
			</div>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/myProfile">Mon profil</Link>
				<Link to="/profiles">Découvrir des profils</Link>
			</nav>
		</header>
	);
}

export default Header;
