import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Discover_profiles from "./pages/Discover_profiles.tsx";
import Home from "./pages/Home.tsx";
import My_profile from "./pages/My_profile.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/my_profile",
				element: <My_profile />,
			},
			{
				path: "/discover_profiles",
				element: <Discover_profiles />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
