import { Outlet } from "react-router";
import "./App.css";
import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyProfile from "./pages/myProfile/MyProfile";

function App() {
	return (
		<>
			<Header />
			<MyProfile />
			<Outlet />
			<Footer />
			<Toaster />
		</>
	);
}
export default App;
