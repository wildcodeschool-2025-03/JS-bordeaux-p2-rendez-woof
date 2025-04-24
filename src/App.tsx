import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<div className="page-wrapper">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
