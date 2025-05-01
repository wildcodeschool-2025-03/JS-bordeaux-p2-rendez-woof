import { Outlet } from "react-router";
import "./App.css";
import { Toaster } from "sonner";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

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
