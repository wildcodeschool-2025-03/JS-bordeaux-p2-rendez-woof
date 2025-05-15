import { createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import MyProfile from "./pages/myProfile/MyProfile.tsx";
import Profiles from "./pages/profiles/Profiles.tsx";

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
				path: "/decouvrir-profiles",
				element: <Profiles />,
			},
		],
	},
]);

export default router;
