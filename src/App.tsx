import { Link, Outlet } from "react-router";
import "./reset.css";
import "./App.css";
import CardProfile from "./component/CardProfile/CardProfile/CardProfile";
import { Toaster } from "sonner";

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
			<main>
				<Outlet />
				<CardProfile />
				<Toaster />
			</main>
		</>
	);
}
export default App;
