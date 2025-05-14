import { Outlet } from "react-router";
import "./App.css";
import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<Toaster />
		</>
	);
}
export default App;
