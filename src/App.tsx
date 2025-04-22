import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<img
					className="logo"
					src="src/images/logo.png"
					alt="logo"
					width="50"
					height="50"
				/>
				<h1>RENDEZ-WOOF</h1>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/my_profile">Mon profil</Link>
					<Link to="/discover_profiles">Découvrir des profils</Link>
				</nav>
			</header>
			<h2>toto</h2>
			<Outlet />
		</>
	);
}

export default App;
