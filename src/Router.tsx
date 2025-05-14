import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import MyProfile from "./pages/myProfile/MyProfile.tsx";
import Profiles from "./pages/profiles/Profiles.tsx"; // Page pour découvrir les profils

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/myProfile",
				element: <MyProfile />,
			},
			{
				path: "/decouvrir-profiles", // Changer le chemin ici pour correspondre à ce que tu veux
				element: <Profiles />, // Page des profils
			},
		],
	},
]);

export default router;
