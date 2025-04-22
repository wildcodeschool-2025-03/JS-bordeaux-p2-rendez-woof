import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/my_profile">Mon profil</Link>
					<Link to="/discover_profiles">Découvrir des profils</Link>
				</nav>
			</header>
			<h1>coucou</h1>
			<h2>toto</h2>
			<Outlet />
		</>
	);
}

export default App;
