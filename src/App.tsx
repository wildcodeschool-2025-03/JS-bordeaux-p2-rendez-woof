import { Outlet } from "react-router";
import { ScreenProvider } from "./contexts/ScreenContext";
import "./App.css";
import { Toaster } from "sonner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<ScreenProvider>
				<Outlet />
			</ScreenProvider>
			<Footer />
			<Toaster />
		</>
	);
}
export default App;
