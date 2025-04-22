import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<nav>
					<Link to="/">Accueil</Link>
					<Link to="/myProfile">Mon profil</Link>
					<Link to="/profiles">Découvrir des profils</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
}

export default App;
