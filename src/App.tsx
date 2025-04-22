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
					<Link to="/myProfile">Mon profil</Link>
					<Link to="/profiles">Découvrir des profils</Link>
				</nav>
			</header>
			<Outlet />
		</>
	);
}

export default App;
